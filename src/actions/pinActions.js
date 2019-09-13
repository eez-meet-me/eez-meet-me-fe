import { getAllPins } from '../services/pindropApi';

export const GET_PINS = 'GET_PINS';
export const getPins = () => ({
  type: GET_PINS,
  payload: getAllPins()
});
