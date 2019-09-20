import React, { useState } from 'react';
import PropTypes from 'prop-types';

function addFollower({ handleSubmit }) {
  const [email, updateEmail] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    handleSubmit(email);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={email}
        onChange={({ target }) => updateEmail(target.value)}
        placeholder="email..."/>
      <button>Submit</button>
    </form>
  );
}

addFollower.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default addFollower;
