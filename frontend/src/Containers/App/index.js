import routes from '../../Routes'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Sidebar from './Sidebar';
import { AppContentBox, AppWrapper } from '../../Styled/Layout';
import PageTitle from './PageTitle';
import { AppProvider } from './AppContext';
import AppMenu from './AppMenu';

function App() {
  return (
    <AppProvider>
      <AppWrapper>
        <BrowserRouter>
            <Sidebar/>
          <AppContentBox>
            <AppMenu/>
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
          </AppContentBox>
        </BrowserRouter>
      </AppWrapper>
    </AppProvider>
  );
}

export default App;
