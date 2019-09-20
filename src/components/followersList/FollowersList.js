import React from 'react';
import PropTypes from 'prop-types';
import FollowerListItem from './FollowerListItem';
import styles from './FollowerList.css';

function FollowersList({ followers }) {
  const followerElements = followers.map((follower, i) => {
    return (
      <li key={i}>
        <FollowerListItem follower={follower} />
      </li>
    );
  });

  return (
    <section>
      <ul className={styles.followerList}>
        {followerElements}
      </ul>
    </section>
  );
}

FollowersList.propTypes = {
  followers: PropTypes.array.isRequired
};

export default FollowersList;
