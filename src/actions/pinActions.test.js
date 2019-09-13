jest.mock('../services/pindropApi', () => ({ 
  getAllPins: jest.fn()
}));
import { getAllPins } from '../services/pindropApi';
import { GET_PINS, getPins } from './pinActions';

describe('pin actions', () => {
  const payload = {};
  getAllPins.mockReturnValue(payload);
  it('can get all pins', () => {
    const action = getPins();
    expect(action.type).toBe(GET_PINS);
    expect(action.payload).toBe(payload);
  });

});
