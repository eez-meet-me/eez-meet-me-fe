import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import styles from './AddFollower.css';

function addFollower({ handleSubmit }) {
  const [email, updateEmail] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    handleSubmit(email);
  };

  return (
    <form onSubmit={onSubmit} className={styles.addFollower}>
      <input
        type="text"
        value={email}
        onChange={({ target }) => updateEmail(target.value)}
        placeholder="email..."/>
      <Button>Submit</Button>
    </form>
  );
}

addFollower.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default addFollower;
