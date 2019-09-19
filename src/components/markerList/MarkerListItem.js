import React from 'react';
import PropTypes from 'prop-types';
import styles from './MarkerListItem.css';
import DeleteButtonContainer from '../containers/DeleteButtonContainer';
function MarkerListItem({ pin }) {

  return (
    <tr className={styles.MarkerListItem}> 
      <p>Location Name: {pin.where}</p> 
      <p>Address: {pin.address}</p>
      <p>Start Time {pin.startTime} - End Time: {pin.endTime}</p>
      <p>Message: {pin.message}</p>
      <DeleteButtonContainer pin={pin} />
    </tr>
  );
}

MarkerListItem.propTypes = {
  pin: PropTypes.object.isRequired
};

export default MarkerListItem;
