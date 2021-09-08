import React,{useEffect,useState} from 'react';
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
import { AppProvider } from './Context';
import TopMenu from '../../Components/TopMenu';
import Footer from '../../Components/Footer';
import CookiesAcceptation from '../CookiesAcceptation';


const App = () => {
  useEffect(() => {
    if(localStorage.getItem('cookiesAccepted')==='false')
      localStorage.setItem('cookiesAccepted','true');
  },[])

  return (
    <AppProvider>
      <CookiesAcceptation/>
      <Wrapper>
        <BrowserRouter>
          <Sidebar/>
          <ContentBox>
            <TopMenu label="Lorem Management Portal - Super Admin"/>
            <Switch>
            { routes.map((route, key) => (
                <Route
                  key={ key }
                  path={ route.path }
                  component={ route.component }
                  exact={ route.exact }
                />))}
            </Switch>
            <Route path="/">
              <Redirect to="/privacy"/>
            </Route>
          </ContentBox>
        </BrowserRouter>
      </Wrapper>
      <Footer/>
    </AppProvider>
  );
}

export default App;
