import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
        placeholder="enter your friends email..."/>
      <button>Submit</button>
    </form>
  );
}

addFollower.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default addFollower;
