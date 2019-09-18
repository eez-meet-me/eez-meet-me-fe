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
      Where<input onChange={({ target }) => updateWhere(target.value)} type="text" value={where} name="where"></input>
      Address<input onChange={({ target }) => updateAddress(target.value)} type="text" value={address} name="address"></input>
      Start time<input onChange={({ target }) => updateStartTime(target.value)} type="text" value={startTime} name="startTime"></input>
      End time<input onChange={({ target }) => updateEndTime(target.value)} type="text" value={endTime} name="endTime"></input>
      Messsage<input onChange={({ target }) => updateMessage(target.value)} type="text" value={message} name="message"></input>
      <button>Post event</button>
    </form>
  );
}

AddPin.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default AddPin;
