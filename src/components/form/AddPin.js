import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './AddPin.css';

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
    <form className={styles.addPinForm} onSubmit={onSubmit}>
      <button>Post a pin</button>
      Location name<input onChange={({ target }) => updateWhere(target.value)} type="text" value={where} name="where" placeholder="Type here"></input>
      Address<input onChange={({ target }) => updateAddress(target.value)} type="text" value={address} name="address" placeholder="Type here"></input>
      Start time<input onChange={({ target }) => updateStartTime(target.value)} type="time" value={startTime} name="startTime" placeholder="Type here"></input>
      End time<input onChange={({ target }) => updateEndTime(target.value)} type="time" value={endTime} name="endTime" placeholder="Type here"></input>
      Message<input onChange={({ target }) => updateMessage(target.value)} type="text" value={message} name="message" placeholder="Type here"></input>
    </form>
  );
}

AddPin.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default AddPin;
