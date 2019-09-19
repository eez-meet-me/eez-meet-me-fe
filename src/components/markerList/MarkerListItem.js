import React from 'react';
import PropTypes from 'prop-types';
import styles from './MarkerListItem.css';
import DeleteButtonContainer from '../containers/DeleteButtonContainer';
function MarkerListItem({ pin }) {

  return (
    <tr className={styles.MarkerListItem}> 
      <td> {pin.where}</td>
      <td>{pin.address}</td>
      <td>{pin.startTime} - </td>
      <td>{pin.endTime}</td>
      <td>{pin.message}</td>
      <DeleteButtonContainer pin={pin} />
    </tr>
  );
}

MarkerListItem.propTypes = {
  pin: PropTypes.object.isRequired
};

export default MarkerListItem;
