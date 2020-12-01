/* @flow */
import React from 'react';
import { shallow } from 'enzyme';

import LineDivider from '..';

it('renders correctly', () => {
  const line = shallow(<LineDivider />);
  expect(line).toMatchSnapshot();
});
