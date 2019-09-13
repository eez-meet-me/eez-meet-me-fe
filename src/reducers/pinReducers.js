import { GET_PINS } from '../actions/pinActions';

const initialState = {
  pins: []
};

export default function reducers( state = initialState, action) {
  switch(action.type) {
    case GET_PINS:
      return { pins: [] }
  }
}