import React from 'react';
import { shallow } from 'enzyme';

import Button from '../../src/components/Button';

describe('Testing Button', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Button label='foo' />);

    expect(wrapper).toMatchSnapshot();
  });

  it('call expected function', () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(<Button label='foo' onClick={mockFunction} />);

    wrapper.simulate('click');
    expect(mockFunction).toHaveBeenCalled();    
  })
});