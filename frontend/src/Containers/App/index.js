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

function App() {
  return (
    <AppProvider>
      <Wrapper>
        <BrowserRouter>
            <Sidebar/>
          <ContentBox>
            <TopMenu label="Lorem Management Portal - Super Admin"/>
            <PageTitle />
            <Switch>
              { routes.map((route, key) => (
                <Route key={ key } path={ route.path } component={ route.component }
                       exact={ route.exact }/>))
              }
              <Route path="/">
                <Redirect to="/privacy"/>
              </Route>
            </Switch>
          </ContentBox>
        </BrowserRouter>
      </Wrapper>
    </AppProvider>
  );
}

export default App;
