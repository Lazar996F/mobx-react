import { createContext, useReducer } from 'react'

const AppContext = createContext(undefined);

export const SET_TITLE = 'SET_TITLE';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_TITLE:
      return {
        ...state,
        title: action.payload,
        subtitle: 'Active and archive Data Privacy records'
      }
    default:
      return;
  }
};

export const AppProvider = (props) => {

  const [state, dispatch] = useReducer(reducer, {});

  return (
    <AppContext.Provider value={ { state, dispatch } }>
      {props.children}
    </AppContext.Provider>
  );
}


export default AppContext;
