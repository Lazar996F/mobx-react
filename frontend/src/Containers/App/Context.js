import { createContext, useReducer } from 'react'

const AppContext = createContext(undefined);

const initialState = {
  linkItems: [
    {
      title: "Dashboard",
      to: '/dashboard'
    },
    {
      title: "Companies",
      to: '/companies'
    },
    {
      title: "Branches",
      to: '/branches'
    },
    {
      title: "Users",
      to: '/users'
    },
    {
      title: "Terms of Service",
      to: '/service'
    },
    {
      title: "Data Privacy",
      to: '/privacy'
    },
    {
      title: "General settings",
      to: '/settings'
    }
  ],
  title: '',
  subtitle: '',
  username: 'John Doe'
}
export const SET_TITLE = 'SET_TITLE';
export const SET_POLICIES_DATA = 'SET_POLICIES_DATA';

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
  const [ state, dispatch ] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={ { state, dispatch } }>
      { props.children }
    </AppContext.Provider>
  );
}

export default AppContext;
