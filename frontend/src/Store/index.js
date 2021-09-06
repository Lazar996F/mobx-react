import { makeAutoObservable } from 'mobx';

class Store {
  policies = []
  policyForUpdate = {
    role: '',
    pdf: '',
    date: ''
  }

  constructor() {
    makeAutoObservable(this);
  }

  setPolicies = (policies) => {
    this.policies = policies
  }

  setPolicyForUpdate = ({ role, date, pdf }) => {
    this.policyForUpdate = {
      role,
      pdf,
      date
    }
  }
}

const store = new Store()

export default store;
