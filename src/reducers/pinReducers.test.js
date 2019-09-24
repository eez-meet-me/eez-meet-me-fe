jest.mock('../services/pindropApi', () => ({ 
  getAllPins: jest.fn()
}));
import { getAllPins } from '../services/pindropApi';
import { getPins } from '../actions/pinActions';
import pinReducer from '../reducers/pinReducers';

describe('pin reducers test', () => {
  const payload = [
    {
      title: 'stuff'
    },
    {
      title: 'and things'
    }
  ];
  getAllPins.mockReturnValue(payload);
  it('updates state of pins array', () => {

    const state = {
      pins: []
    };

    const action = getPins();

    const newState = pinReducer(state, action);
    expect(newState).toEqual({ pins: [{ title: 'stuff' }, { title: 'and things' }] });
  });
});
