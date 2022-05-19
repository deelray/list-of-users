import React from 'react';

export const RootStoreContext = React.createContext(null);

export function useStore() {
  const store = React.useContext(RootStoreContext);
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider');
  }
  return store;
}
