import { makeAutoObservable } from 'mobx';
import axios from 'axios';

class Store {
  policies = []
  error=false
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

   setError = (err) => {
    this.error = Boolean(err)
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
