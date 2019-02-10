import React, { Component } from 'react';
import store from 'store';
import { Prism as CodeBlock } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/styles/prism';
import { GridContainer, GridItem } from '../Grid';
import CodeBlockOptions from './CodeBlockOptions';
import configurator from './Configurator';

export default class ConfigurableCodeBlock extends Component {
  static STORE_ID = 'wealth-configurable-code-block';

  constructor(...args) {
    super(...args);
    this.state = store.get(this.constructor.STORE_ID) || {
      importType: 'esm',
      usageParadigm: 'fp',
      importModularity: 'full'
    };
  }

  save = () => store.set(this.constructor.STORE_ID, this.state);

  onChange = ({ target: { name, value } }) => this.setState({ [name]: value }, this.save);

  render() {
    const {
      importType,
      usageParadigm,
      importModularity
    } = this.state;
    return (
      <GridContainer>
        <GridItem xs={12}>
          <CodeBlockOptions
            onChange={this.onChange}
            {...this.state}
          />
          <CodeBlock
            language="javascript"
            style={tomorrow}
            showLineNumbers
          >
            {configurator({
              source: this.props.children,
              importType,
              usageParadigm,
              importModularity
            })}
          </CodeBlock>
        </GridItem>
      </GridContainer>
    );
  }
}
