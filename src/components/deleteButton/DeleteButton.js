import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

function DeleteButton({ pin, sub, handleDelete }) {

  if(pin.user === sub) {
    return <Button onClick={() => handleDelete(pin)}>Delete</Button>;
  } else {
    return <div></div>;
  }
}

DeleteButton.propTypes = {
  pin: PropTypes.object.isRequired,
  sub: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default DeleteButton;
