import React from 'react';
import { shallow } from 'enzyme';

import RowInfo from '../../src/components/RowInfo';

describe('Testing RowInfo', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<RowInfo label='foo' value='bar' />);

    expect(wrapper).toMatchSnapshot();
  });
});