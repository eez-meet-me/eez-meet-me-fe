import React from 'react';
import PropTypes from 'prop-types';
import styles from './MarkerListItem.css';
import DeleteButtonContainer from '../containers/DeleteButtonContainer';
function MarkerListItem({ pin }) {

  return (
    <section className={styles.MarkerListItem}>
      <p>{pin.where}</p>
      <p>{pin.address}</p>
      <p>{pin.startTime} - {pin.endTime}</p>
      <p>{pin.message}</p>
      <DeleteButtonContainer pin={pin} />
    </section>
  );
}

MarkerListItem.propTypes = {
  pin: PropTypes.object.isRequired
};

export default MarkerListItem;
