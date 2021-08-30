import routes from '../../Routes';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Sidebar from './Sidebar';
import { ContentBox } from '../../Components/Layout/ContentBox';
import { Wrapper } from '../../Components/Layout/Wrapper';
import PageTitle from './PageTitle';
import { AppProvider } from './Context';
import TopMenu from '../../Components/TopMenu';
import Footer from '../../Components/Footer';

function App() {
  const menuButtonsLabels = [
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
      title: 'Esetup'
    },
    {
      src: '/icons/wiserhome.png',
      title: 'Wiser Home'
    }
  ]

  return (
    <AppProvider>
      <Wrapper>
        <BrowserRouter>
            <Sidebar/>
          <ContentBox>
            <TopMenu label="Lorem Management Portal - Super Admin" menuButtonsLabels={menuButtonsLabels}/>
            <PageTitle />
            <Switch>
              { routes.map((route, key) => (
                <Route key={ key } path={ route.path } component={ route.component }
                       exact={ true }/>))
              }
              <Route path="/">
                <Redirect to="/privacy"/>
              </Route>
            </Switch>
          </ContentBox>
        </BrowserRouter>
      </Wrapper>
      <Footer/>
    </AppProvider>
  );
}

export default App;
