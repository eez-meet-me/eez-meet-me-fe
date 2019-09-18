import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddPin({ handleSubmit }) {
  const [where, updateWhere] = useState('');
  const [address, updateAddress] = useState('');
  const [startTime, updateStartTime] = useState('');
  const [endTime, updateEndTime] = useState('');
  const [message, updateMessage] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    handleSubmit(where, address, startTime, endTime, message);
  };

  return (
    <form onSubmit={onSubmit}>
      <input onChange={({ target }) => updateWhere(target.value)} type="text" value={where} name="where" placeholder="where"></input>
      <input onChange={({ target }) => updateAddress(target.value)} type="text" value={address} name="address" placeholder="address"></input>
      <input onChange={({ target }) => updateStartTime(target.value)} type="text" value={startTime} name="startTime" placeholder="startTime"></input>
      <input onChange={({ target }) => updateEndTime(target.value)} type="text" value={endTime} name="endTime" placeholder="endTime"></input>
      <input onChange={({ target }) => updateMessage(target.value)} type="text" value={message} name="message" placeholder="message"></input>
      <button>Post event</button>
    </form>
  );
}

AddPin.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default AddPin;
