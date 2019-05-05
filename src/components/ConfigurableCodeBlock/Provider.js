import React, { createContext, useState, useEffect } from 'react';
import store from 'store';

export const context = createContext({
  value: {
    importType: 'esm',
    usageParadigm: 'fp',
    importModularity: 'full'
  },
  onChange: () => {}
});

const STORE_ID = 'wealth-configurable-code-block'

const {
  Provider
} = context;

const ConfigurableCodeBlockProvider = ({ children }) => {
  const [state, setState] = useState(store.get(STORE_ID) || {
    importType: 'esm',
    usageParadigm: 'fp',
    importModularity: 'full'
  });

  useEffect(() => {
    store.set(STORE_ID, state);
  }, [state]);

  const onChange = ({ name, value }) => setState(prevState => ({
    ...prevState,
    [name]: value
  }));

  return (
    <Provider
      value={{
        value: state,
        onChange
      }}
    >
      {children}
    </Provider>
  );
};

export default ConfigurableCodeBlockProvider;
