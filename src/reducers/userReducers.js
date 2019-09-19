import { GET_FOLLOWERS } from '../actions/userActions';

const initialState = {
  followers: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_FOLLOWERS:
      return { ...state, followers: action.payload };
    default:
      return state;
  }
}
