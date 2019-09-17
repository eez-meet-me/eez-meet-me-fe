import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import GoogleMap from '../components/containers/GoogleMap';
import { withSession } from '../Auth0Provider';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={withSession(GoogleMap)}/>
        </Switch>
      </Router>
    </>
  );
}
