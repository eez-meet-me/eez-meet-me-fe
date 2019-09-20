import React from 'react';
import PropTypes from 'prop-types';

function FollowerListItem({ follower }) {
  return (
    <section>
      <p>{follower.email}</p>
    </section>
  );
}

FollowerListItem.propTypes = {
  follower: PropTypes.object.isRequired
};

export default FollowerListItem;
