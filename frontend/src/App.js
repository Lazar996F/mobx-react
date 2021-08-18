import routes from './Routes'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Sidebar from "./Components/Sidebar";
import {AppMenu, AppMenuButton, Box, HeaderText, AppWrapper} from './Styled/Layout';
import {HiViewGrid} from 'react-icons/hi';
import {SidebarWrapper} from './Styled/Sidebar';

function App() {
  return (
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
          <Switch>
            {routes.map((route, key) => (
              <Route key={key} path={route.path} component={route.component} exact={route.exact}/>))
            }
            <Route path="/">
              <Redirect to="/privacy"/>
            </Route>
          </Switch>
        </Box>
      </Router>
    </AppWrapper>
  );
}

export default App;
