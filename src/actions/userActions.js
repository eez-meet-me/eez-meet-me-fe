import { getFollowers } from '../services/userApi';

export const GET_FOLLOWERS = 'GET_FOLLOWERS';
export const fetchFollowers = () => ({
  type: GET_FOLLOWERS,
  payload: getFollowers()
});
