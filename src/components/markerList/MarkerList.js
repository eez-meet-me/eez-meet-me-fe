import React from 'react';
import PropTypes from 'prop-types';
import MarkerListItem from './MarkerListItem';
import styles from './MarkerList.css';

function MarkerList({ pins }) {
  const pinElements = pins.map(pin => {
    return (
      <li key={pin._id}>
        <MarkerListItem pin={pin} />
      </li>
    );
  });

  return (
    <section className={styles.MarkerList}>
      <ul>
        {pinElements}
      </ul>
    </section>
  );
}

MarkerList.propTypes = {
  pins: PropTypes.array.isRequired
};

export default MarkerList;
