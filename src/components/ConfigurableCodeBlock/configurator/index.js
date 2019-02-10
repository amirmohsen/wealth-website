const acorn = require('acorn');
const walk = require('acorn-walk');
const escodegen = require('escodegen');

const generateESM = ({
  importedNames
}) => {
  return importedNames.map(importedName => ({
    type: 'ImportDeclaration',
    specifiers: [
      {
        type: 'ImportDefaultSpecifier',
        local: {
          type: 'Identifier',
          name: importedName
        }
      }
    ],
    source: {
      type: 'Literal',
      value: `wealth/methods/${importedName}`
    }
  }));
};

const generateCJS = ({ importedNames }) => {
  return importedNames.map(importedName => ({
    "type": "VariableDeclaration",
    "declarations": [
      {
        "type": "VariableDeclarator",
        "id": {
          "type": "Identifier",
          "name": importedName
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
              "value": `wealth/methods/${importedName}`
            }
          ]
        }
      }
    ],
    "kind": "const"
  }));
};

const convertToCJS = ({ importedNames, body, nodeIndex, source }) => {
  source.replace('wealth', 'wealth/node');

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
              "value": source
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

      if (node.specifiers[0].type === 'ImportDefaultSpecifier') {
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

const configurator = ({
  source,
  importType,
  usageParadigm,
  importModularity
}) => {
  const parsed = acorn.parse(source, {
    sourceType: 'module'
  });

  console.dir(parsed);

  handleImports({
    parsed,
    importType,
    usageParadigm,
    importModularity
  });

  console.dir(parsed);

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
