import { getPinsList } from './pinSelectors';

describe('pin selectors', () => {
  it('gets pins from state', () => {
    const state = {
      pins: {
        pins: [
          {
            title: 'its a pin'
          },
          {
            title: '2oo its a pin'
          }
        ] }
    };

    const pins = getPinsList(state);
    expect(state.pins.pins).toEqual(pins);
  });
});
