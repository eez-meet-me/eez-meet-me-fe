import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import GoogleMap from '../components/containers/GoogleMap';
import Followers from '../components/followers/Followers';
import AboutUs from '../components/about-us/AboutUs';
import { withSession } from '../Auth0Provider';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/AboutUs" component={withSession(AboutUs)}/>
          <Route path="/Followers" component={withSession(Followers)}/>
          <Route path="/" component={withSession(GoogleMap)}/>
        </Switch>
      </Router>
    </>
  );
}
