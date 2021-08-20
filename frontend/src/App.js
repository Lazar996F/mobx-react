import {useState} from 'react'
import routes from './Routes'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Sidebar from "./Components/Sidebar";
import {AppMenu, AppMenuButton, Box, HeaderText, AppWrapper} from './Styled/Layout';
import {HiViewGrid} from 'react-icons/hi';
import {SidebarWrapper} from './Styled/Sidebar';
import PageTitle from "./Components/PageTitle";

function App() {
  const [title,setTitle] = useState('');
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
          {title !== '' && <PageTitle title={title} subtitle="Active and archive Data Privacy records"/>}
          <Switch>
            {routes.map((route, key) => (
              <Route key={key} path={route.path} component={() => route.component(setTitle)} exact={route.exact}/>))
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
