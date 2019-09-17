import { GET_PINS, POST_PIN } from '../actions/pinActions';

const initialState = {
  pins: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case POST_PIN:
      return { ...state, pin: [...state, action.payload] };
    case GET_PINS:
      return { ...state, pins: action.payload };
    default: 
      return state;
  }
}
