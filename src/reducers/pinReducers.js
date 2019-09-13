import { GET_PINS } from '../actions/pinActions';

const initialState = {
  pins: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_PINS:
      return { ...state, pins: action.payload };
    default: 
      return state;
  }
}
