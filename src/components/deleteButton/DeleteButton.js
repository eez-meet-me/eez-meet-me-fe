import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { useAuth0 } from '../../Auth0Provider';

function DeleteButton({ pin, handleDelete }) {
  const { user } = useAuth0();
  const sub = user.sub;

  if(pin.user === sub) {
    return <Button onClick={() => handleDelete(pin)}>Delete</Button>;
  } else {
    return <div></div>;
  }
}

DeleteButton.propTypes = {
  pin: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default DeleteButton;
