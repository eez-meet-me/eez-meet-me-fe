import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import AddPinContainer from '../containers/AddPinContainer';
import styles from './Drawer.css';

const useStyles = makeStyles({
  list: {
    width: 350,
  }
});

export default function TemporaryDrawer() {

  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => () => {
    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={styles.Drawer}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <img src='./assets/pinDrop.png' className={styles.logo}></img>
      <h2>pindrop</h2>
      <List>
        <Link component={RouterLink} to="/AboutUs">
          <ListItemText className={styles.profile}primary='About Us' />
        </Link>
        <Link component={RouterLink} to="/Followers">
          <ListItemText primary='Friends' />
      </List>
    </div>
  );

  return (
    <div className={styles.Drawer}>
      <Button onClick={toggleDrawer('left', true)}>Menu</Button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
        <AddPinContainer />
      </Drawer>
    </div>
  );
}
