import { getAllPins, postPin } from '../services/pindropApi';

export const GET_PINS = 'GET_PINS';
export const getPins = () => ({
  type: GET_PINS,
  payload: getAllPins()
});

export const POST_PIN = 'POST_PIN';
export const createPin = () => ({
  types: POST_PIN,
  payload: postPin()
});
