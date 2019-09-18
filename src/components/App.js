import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import GoogleMap from '../components/containers/GoogleMap';
import Profile from '../components/profile/Profile';
import AboutUs from '../components/about-us/AboutUs';
import { withSession } from '../Auth0Provider';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/AboutUs" component={withSession(Profile)}/>
          <Route path="/Profile" component={withSession(AboutUs)}/>
          <Route path="/" component={withSession(GoogleMap)}/>
        </Switch>
      </Router>
    </>
  );
}
