import React from 'react';
import PropTypes from 'prop-types';
import styles from './MarkerList.css';

function MarkerList({ pins }) {
  const pinElements = pins.map(pin => {
    return (
      <tr key={pin._id}>
        <td> {pin.where}</td>
        <td>{pin.address}</td>
        <td>{pin.startTime}</td>
        <td>{pin.endTime}</td>
        <td>{pin.message}</td>
      </tr>
    );
  });

  return (
    <section className={styles.MarkerList}>
      <table>
        <thead>
          <tr>
            <th>Location</th>
            <th>Address</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {pinElements}
        </tbody>
      </table>
    </section>
  );
}

MarkerList.propTypes = {
  pins: PropTypes.array.isRequired
};

export default MarkerList;
