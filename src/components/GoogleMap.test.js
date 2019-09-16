import React from 'react';
import { shallow } from 'enzyme';
import GoogleMap from './containers/GoogleMap';

describe('GoogleMap component', () => {
  it('renders GoogleMap', () => {
    const wrapper = shallow(<GoogleMap />);
    expect(wrapper).toMatchSnapshot();
  });
});
