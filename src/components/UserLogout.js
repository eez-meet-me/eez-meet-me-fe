import React from 'react';
import { useAuth0 } from '../Auth0Provider';
import { withSession } from '../Auth0Provider';


function UserLogout() {
  const { auth0Client } = useAuth0();
  const logout = () => auth0Client.logout();

  return <button onClick={logout}>Logout</button>;
}

export default withSession(UserLogout);
