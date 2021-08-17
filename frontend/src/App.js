import routes from './Routes'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Sidebar from "./Components/Sidebar";
import { AppMenu, AppMenuButton, Box, HeaderText } from './Styled/Layout';
import { HiViewGrid } from 'react-icons/hi';
import { SidebarWrapper } from './Styled/Sidebar';

function App() {
  return (
    <div className="App">
      <Router>
        <SidebarWrapper>
          <Sidebar/>
        </SidebarWrapper>
        <AppMenu>
          <HeaderText>Lorem Managment Portal - Super Admin</HeaderText>
          <AppMenuButton>
            <HiViewGrid size="1.4em"/>
          </AppMenuButton>
        </AppMenu>
        <Switch>
          <Box>
            { routes.map((route, key) => (
              <Route key={key} path={ route.path } component={ route.component } exact={ route.exact } />))
            }
            <Route path="/">
              <Redirect to="/privacy"/>
            </Route>
          </Box>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
