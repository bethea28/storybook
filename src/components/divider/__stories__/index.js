// @flow

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import { DocItem } from '@docs';

import Divider from '..';

class Story extends Component {
  render = () => (
    <div style={{ width: '100%' }}>
      <Divider
        colors={[
          { flex: 1, color: '#e9e9e9' },
          {
            flex: 5,
            color: '#f5f6f6',
          },
        ]}
      />
    </div>
  );
}

storiesOf('Components', module).add('Divider', () => (
  <DocItem
    example={{
      render: () => <Story />,
    }}
  />
));
