import { createContext, useReducer } from 'react'
const DataPrivacyContext = createContext();

const initialState = {
  policies: [],
  policyForEdit: {
    areProfessionalUsers: false,
    areEndUsers: false,
    pdfData: ''
  }
}

export const SET_POLICIES = 'SET_POLICIES';
export const SET_EDIT_POLICY_DATA = 'SET_EDIT_POLICY_DATA';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_POLICIES:
      return {
        ...state,
        policies: action.payload
      }
    case SET_EDIT_POLICY_DATA:
      return {
        ...state,
        policyForEdit: action.payload
      }
    default:
      return;
  }
};

export const DataPrivacyProvider = (props) => {
  // we need to add right an initial action
  const [ state, dispatch ] = useReducer(reducer, initialState);

  return (
    <DataPrivacyContext.Provider value={ { state, dispatch } }>
      { props.children }
    </DataPrivacyContext.Provider>
  );
}

export default DataPrivacyContext;
