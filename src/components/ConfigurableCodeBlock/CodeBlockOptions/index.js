import React from 'react';
import InnerFormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import OriginalGrid from '@material-ui/core/Grid';
import { withTheme } from '@material-ui/core/styles';
import styled from 'styled-components';

const FormControlWrapper = withTheme()(styled(OriginalGrid)`
  && {
    display: flex;
    ${({ theme }) => `
        ${theme.breakpoints.down('xs')} {
          margin-bottom: 30px;

          &:last-child {
            margin-bottom: 0;
          }
        }
    `}
  }
`);

const FormControl = styled(InnerFormControl)`
  && {
    min-width: 150px;
    margin: auto;
  }
`;

const ConfigurationOption = ({ name, label, value, onChange, options }) => (
  <FormControlWrapper item xs={12} sm={4}>
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
  </FormControlWrapper>
);

const CodeBlockOptions = ({ importType, usageParadigm, importModularity, onChange }) => (
  <OriginalGrid container>
    <ConfigurationOption
      label="Import type"
      name="importType"
      value={importType}
      onChange={onChange}
      options={[
        {
          value: 'esm',
          label: 'ES Modules'
        },
        {
          value: 'cjs',
          label: 'Common JS'
        }
      ]}
    />
    <ConfigurationOption
      label="Usage paradigm"
      name="usageParadigm"
      value={usageParadigm}
      onChange={onChange}
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
      usageParadigm === 'oo' && (
        <ConfigurationOption
          label="Import modularity"
          name="importModularity"
          value={importModularity}
          onChange={onChange}
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
  </OriginalGrid>
);

export default CodeBlockOptions;
