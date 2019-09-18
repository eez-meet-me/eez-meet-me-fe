import React from 'react';
import { useAuth0 } from '../../Auth0Provider';
import { withSession } from '../../Auth0Provider';
import styles from './UserLogout.css';
import Button from '@material-ui/core/Button';


function UserLogout() {
  const { auth0Client } = useAuth0();
  const logout = () => auth0Client.logout();

  return (
    <section className={styles.UserLogout}>
      <Button onClick={logout}>Logout</Button>
    </section>
  );
}

export default withSession(UserLogout);
