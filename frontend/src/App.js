import routes from './Routes'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import { AppMenuButton, HeaderText, AppWrapper } from './Styled/Layout';
import { HiViewGrid } from 'react-icons/hi';
import { SidebarWrapper } from './Styled/Sidebar';
import PageTitle from './Components/PageTitle';
import { AppProvider } from './AppContext';
import { AppMenu } from './Components/AppMenu/AppMenu';
import { Box } from './Components/Layout/Box';

function App() {

  return (
    <AppProvider>
      <AppWrapper>
        <Router>
          <SidebarWrapper>
            <Sidebar/>
          </SidebarWrapper>
          <Box>
            <AppMenu>
              <HeaderText>Lorem Management Portal - Super Admin</HeaderText>
              <AppMenuButton>
                <HiViewGrid size="1.4em"/>
              </AppMenuButton>
            </AppMenu>
            <PageTitle />
            <Switch>
              { routes.map((route, key) => (
                <Route key={ key } path={ route.path } component={route.component}
                       exact={ route.exact }/>))
              }
              <Route path="/">
                <Redirect to="/privacy"/>
              </Route>
            </Switch>
          </Box>
        </Router>
      </AppWrapper>
    </AppProvider>
  );
}

export default App;
