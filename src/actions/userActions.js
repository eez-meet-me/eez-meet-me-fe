import { getFollowers, postFollower } from '../services/userApi';

export const GET_FOLLOWERS = 'GET_FOLLOWERS';
export const fetchFollowers = () => ({
  type: GET_FOLLOWERS,
  payload: getFollowers()
});

export const POST_FOLLOWER = 'POST_FOLLOWER';
export const createFollower = (email) => ({
  type: POST_FOLLOWER,
  payload: postFollower(email)
});
