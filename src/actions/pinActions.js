import { getAllPins, postPin, deletePin } from '../services/pindropApi';

export const GET_PINS = 'GET_PINS';
export const getPins = () => ({
  type: GET_PINS,
  payload: getAllPins()
});

export const POST_PIN = 'POST_PIN';
export const createPin = (where, address, startTime, endTime, message) => ({
  type: POST_PIN,
  payload: postPin(where, address, startTime, endTime, message)
});

export const DELETE_PIN = 'DELETE_PIN ';
export const deleteAPin = (pin) => ({
  type: DELETE_PIN,
  payload: deletePin(pin)
});
