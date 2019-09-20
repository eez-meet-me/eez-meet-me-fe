import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FollowersList from '../followersList/FollowersList';
import AddFollower from '../form/AddFollower';
import { getFollowersList } from '../../selectors/followerSelectors';
import { fetchFollowers, createFollower } from '../../actions/userActions';
import Header from '../header/Header';
import styles from './FollowersContainer.css';

class FollowersContainer extends Component {

  static propTypes = {
    fetch: PropTypes.func.isRequired,
    followers: PropTypes.array.isRequired,
    handleSubmit: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { followers, handleSubmit } = this.props;
    return (
      <>
        <Header />
        <section className={styles.followersContainer}>
          <AddFollower handleSubmit={handleSubmit}/>
          <FollowersList followers={followers}/>
        </section>
      </>
    );
  }
}

const mapStateToProps = state => ({
  followers: getFollowersList(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchFollowers());
  },
  handleSubmit(email) {
    dispatch(createFollower(email));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowersContainer);

