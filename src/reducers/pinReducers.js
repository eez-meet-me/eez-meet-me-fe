import { GET_PINS, POST_PIN, DELETE_PIN } from '../actions/pinActions';

const initialState = {
  pins: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case POST_PIN:
      return { ...state, pins: [...state.pins, action.payload] };
    case GET_PINS:
      return { ...state, pins: action.payload };
    case DELETE_PIN:
      return { ...state, pins: state.pins.filter(p => p !== action.payload) };
    default:
      return state;
  }
}
