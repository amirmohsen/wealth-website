const acorn = require('acorn');
const walk = require('acorn-walk');
const escodegen = require('escodegen');
// const splitAt = require('split-at');

const generateESM = ({
  importedNames
}) => {
  return importedNames.map(importedName => ({
    type: 'ImportDeclaration',
    specifiers: [],
    source: {
      type: 'Literal',
      value: `wealth/methods/${importedName}`
    }
  }));
};

const generateCJS = ({ importedNames }) => {
  return importedNames.map(importedName => ({
    "type": "ExpressionStatement",
    "expression": {
      "type": "CallExpression",
      "callee": {
        "type": "Identifier",
        "name": "require"
      },
      "arguments": [
        {
          "type": "Literal",
          "value": `wealth/node/methods/${importedName}`
        }
      ]
    }
  }));
};

const convertToCJS = ({ importedNames, body, nodeIndex, source }) => {
  const newSource = source.replace('wealth', 'wealth/node');

  const imports = importedNames
    .map(importedName => ({
      type: 'Property',
      shorthand: true,
      key: {
        type: 'Identifier',
        name: importedName
      },
      kind: 'init',
      value: {
        type: 'Identifier',
        name: importedName
      }
    }));

  body[nodeIndex] = {
    "type": "VariableDeclaration",
    "declarations": [
      {
        "type": "VariableDeclarator",
        "id": {
          "type": "ObjectPattern",
          "properties": imports
        },
        "init": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "name": "require"
          },
          "arguments": [
            {
              "type": "Literal",
              "value": newSource
            }
          ]
        }
      }
    ],
    "kind": "const"
  };
};

const methods = [
  'add',
  'subtract',
  'multiply',
  'divide',
  'absolute',
  'ceil',
  'floor',
  'equals',
  'greaterThan',
  'greaterThanOrEqualTo',
  'lessThan',
  'lessThanOrEqualTo',
  'allocate',
  'allocateBy',
  'format',
  'parse'
];

const convertToOO = (node) => {
  let name = 'Money';

  if (node.callee.name !== 'parse') {
    ({ name } = node.arguments.shift());
  }

  node.callee = {
    type: 'MemberExpression',
    object: {
      type: 'Identifier',
      name
    },
    property: {
      type: 'Identifier',
      name: node.callee.name
    }
  };
};

const handleImports = ({
  parsed,
  importType,
  usageParadigm,
  importModularity
}) => {
  walk.ancestor(parsed, {
    ImportDeclaration(node, ancestors) {
      let source = node.source.value;
      const nodeIndex = ancestors[0].body.indexOf(node);

      if (!node.specifiers.length || node.specifiers[0].type === 'ImportDefaultSpecifier') {
        return;
      }

      const importedNames = node.specifiers.map(specifier => specifier.imported.name);

      if (usageParadigm === 'oo' && source === 'wealth/fn') {
        let imports = [];
        if (importModularity === 'modular') {
          if (importType === 'esm') {
            imports = generateESM({
              importedNames
            });
          }
          else {
            imports = generateCJS({
              importedNames
            });
          }
        }
        ancestors[0].body.splice(nodeIndex, 1, ...imports);
        return;
      }

      if (usageParadigm === 'oo' && source === 'wealth' && importModularity === 'full') {
        node.source.value = source = 'wealth/full';
      }

      if (importType === 'esm') {
        return;
      }

      convertToCJS({
        body: ancestors[0].body,
        importedNames,
        nodeIndex,
        source
      })
    },
    CallExpression(node) {
      if (usageParadigm === 'oo' && node.callee.type === 'Identifier' && methods.includes(node.callee.name)) {
        convertToOO(node);
      }
    }
  });
};

// const splitSourceIntoCommentsAndCodeBlocks = (source) => {
//   const regex = /^\/\/.+$/gm;
//   let indices = [];
//   let match;
//   while (match = regex.exec(source)) {
//     indices = [
//       ...indices,
//       match.index,
//       match.index + match[0].length
//     ];
//   }
//   return splitAt(source, indices);
// };

const configurator = ({
  source,
  importType,
  usageParadigm,
  importModularity
}) => {
  // console.log(splitSourceIntoCommentsAndCodeBlocks(source));
  const parsed = acorn.parse(source, {
    sourceType: 'module'
  });

  handleImports({
    parsed,
    importType,
    usageParadigm,
    importModularity
  });

  const code = escodegen.generate(parsed, {
    format: {
      indent: {
        style: '  ',
        quotes: 'single'
      }
    }
  });

  return code.replace(/\{(.+)\}/gm, '{ $1 }');
};

export default configurator;
