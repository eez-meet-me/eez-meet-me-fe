import React from 'react';
import PropTypes from 'prop-types';
import FollowerListItem from './FollowerListItem';

function FollowersList({ followers }) {
  const followerElements = followers.map((follower, i) => {
    return (
      <li key={i}>
        <FollowerListItem follower={follower} />
      </li>
    );
  });

  return (
    <ul>
      {followerElements}
    </ul>
  );
}

FollowersList.propTypes = {
  followers: PropTypes.array.isRequired
};

export default FollowersList;
