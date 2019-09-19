import React from 'react';
import PropTypes from 'prop-types';
import MarkerListItem from './MarkerListItem';
import styles from './MarkerList.css';

function MarkerList({ pins }) {
  const pinElements = pins.map(pin => {
    return (
      <td key={pin._id}>
        <MarkerListItem pin={pin} />
      </td>
    );
  });

  return (
    <section id="wow" className={styles.MarkerList}>
      <table>
        {pinElements}
      </table>
    </section>
  );
}

MarkerList.propTypes = {
  pins: PropTypes.array.isRequired
};

export default MarkerList;
