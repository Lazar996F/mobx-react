import { createContext, useEffect, useReducer } from 'react'
import dummyData from './dummyData';
import AppContext, { SET_TITLE } from '../App/Context';
const DataPrivacyContext = createContext();

const initialState = {
  policies: []
}

export const SET_DATA = 'SET_DATA';


const reducer = (state, action) => {
  switch (action.type) {
    case SET_DATA:
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
