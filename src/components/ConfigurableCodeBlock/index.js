import React, { useContext } from 'react';
import { Prism as CodeBlock } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/styles/prism';
import { GridContainer, GridItem } from '../Grid';
import CodeBlockOptions from './CodeBlockOptions';
import configurator from './Configurator';
import { context } from './Provider';

const ConfigurableCodeBlock = ({ children }) => {
  const {
    value,
    onChange
  } = useContext(context);
  return (
    <GridContainer>
        <GridItem xs={12}>
          <CodeBlockOptions
            onChange={({ target: { name, value } }) => onChange({ name, value })}
            {...value}
          />
          <CodeBlock
            language="javascript"
            style={tomorrow}
            showLineNumbers
          >
            {configurator({
              source: children,
              ...value
            })}
          </CodeBlock>
        </GridItem>
      </GridContainer>
  );
}

export default ConfigurableCodeBlock;
