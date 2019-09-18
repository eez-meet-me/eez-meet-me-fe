import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { useAuth0 } from '../../Auth0Provider';

function DeleteButton({ pin }) {

  const { user } = useAuth0();

  if(pin.authId === user.sub) {
    return (
      <Button>Delete</Button>
    );
  }
}

DeleteButton.propTypes = {
  pin: PropTypes.object.isRequired
};

export default DeleteButton;
