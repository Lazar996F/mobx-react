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
  username: 'Katie Baxendale',
   menuButtonsLabels: [
    {
      src: '/icons/account_icon.svg',
      title: 'Account'
    },
    {
      src: '/icons/portal.svg',
      title: 'Portal'
    },
    {
      src: '/icons/dispo.svg',
      title: 'Disposuite'
    },
    {
      src: '/icons/esetup.png',
      title: 'eSetup'
    },
    {
      src: '/icons/wiserhome.png',
      title: 'Wiser Home'
    }
  ]
}
export const SET_TITLE_SUBTITLE = 'SET_TITLE_SUBTITLE';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_TITLE_SUBTITLE:
      return {
        ...state,
        title: action.payload.title,
        subtitle: action.payload.subtitle
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
