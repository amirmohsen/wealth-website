import React, { Component } from 'react';
import store from 'store';
import InnerFormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components';
import { GridContainer, GridItem } from '../Grid';

const FormControl = styled(InnerFormControl)`
  && {
    min-width: 150px;
    margin-right: 50px;
  }
`;

const ConfigurationOption = ({ name, label, value, onChange, options }) => (
  <FormControl>
    <InputLabel htmlFor={name}>{label}</InputLabel>
    <Select
      value={value}
      onChange={onChange}
      inputProps={{
        name,
        id: name,
      }}
    >
      {options.map(({ value, label }) => (
        <MenuItem value={value} key={value}>
          {label}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

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
    return (
      <GridContainer>
        <GridItem xs={12}>
          <ConfigurationOption
            label="Import type"
            name="importType"
            value={this.state.importType}
            onChange={this.onChange}
            options={[
              {
                value: 'esm',
                label: 'ES Modules'
              },
              {
                value: 'csj',
                label: 'Common JS'
              }
            ]}
          />
          <ConfigurationOption
            label="Usage paradigm"
            name="usageParadigm"
            value={this.state.usageParadigm}
            onChange={this.onChange}
            options={[
              {
                value: 'fp',
                label: 'Functional'
              },
              {
                value: 'oo',
                label: 'Object-oriented'
              }
            ]}
          />
          {
            this.state.usageParadigm === 'oo' && (
              <ConfigurationOption
                label="Import modularity"
                name="importModularity"
                value={this.state.importModularity}
                onChange={this.onChange}
                options={[
                  {
                    value: 'full',
                    label: 'Full import'
                  },
                  {
                    value: 'modular',
                    label: 'Module augmentation'
                  }
                ]}
              />
            )
          }
        </GridItem>
      </GridContainer>
    );
  }
}
