import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import GoogleMap from '../components/containers/GoogleMap';
import { withSession } from '../Auth0Provider';
import CreatePin from '../components/containers/CreatePin';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={withSession(GoogleMap)}/>
          <Route path="/pin" component={withSession(CreatePin)}/>
        </Switch>
      </Router>
    </>
  );
}
