// @flow

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import { DocItem } from '@docs';

import Image from '..';

storiesOf('Components', module).add('Image', () => (
  <React.Fragment>
    <DocItem
      example={{
        render: () => (
          <Image
            imgSrc="https://www.rockhall.com/sites/default/files/styles/header_image_portrait/public/tupac-crop.jpg?itok=M8XT2jaK"
            altText="Tupac"
            styles={{ width: 200, height: 200 }}
          />
        ),
      }}
    />

    <DocItem
      example={{
        render: () => (
          <Image
            imgSrc="https://static.hiphopdx.com/2014/05/tupac_calove_304x304.jpg"
            altText="Tupac"
            styles={{ width: 200, height: 200 }}
          />
        ),
      }}
    />
  </React.Fragment>
));
