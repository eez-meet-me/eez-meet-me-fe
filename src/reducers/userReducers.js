import { GET_FOLLOWERS, POST_FOLLOWER } from '../actions/userActions';

const initialState = {
  followers: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_FOLLOWERS:
      return { ...state, followers: action.payload };
    case POST_FOLLOWER:
      return { ...state, followers: [...state.followers, action.payload.followers] };
    default:
      return state;
  }
}
