import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import GoogleMap from '../components/containers/GoogleMap';
import AboutUs from '../components/about-us/AboutUs';
import FollowersContainer from './containers/FollowersContainer';
import { withSession } from '../Auth0Provider';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/AboutUs" component={withSession(AboutUs)}/>
          <Route path="/Followers" component={withSession(FollowersContainer)}/>
          <Route path="/" component={withSession(GoogleMap)}/>
        </Switch>
      </Router>
    </>
  );
}
