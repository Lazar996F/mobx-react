import {makeAutoObservable} from 'mobx';

class Store {
  policies = []

  constructor() {
    makeAutoObservable(this);
  }

  setPolicies = (policies) => {
    this.policies = policies
  }
}

const store = new Store()
export default store

/*
import React from 'react';
import { useLocalObservable } from 'mobx-react';

export const StoreContext = React.createContext()

export const StoreProvider = ({children}) => {
  const store = useLocalObservable(() => ({
    policies: [],
    addPolicy: (policy) => {
      store.bugs.push(policy);
    }
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  )
}
*/
