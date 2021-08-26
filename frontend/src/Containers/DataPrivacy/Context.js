import { createContext, useReducer } from 'react'
const DataPrivacyContext = createContext();

const initialState = {
  policies: []
}

export const SET_POLICIES = 'SET_POLICIES';


const reducer = (state, action) => {
  switch (action.type) {
    case SET_POLICIES:
      return {
        ...state,
        policies: action.payload
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
