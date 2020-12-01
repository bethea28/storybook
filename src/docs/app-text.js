/* eslint-disable react/prop-types */
import React from 'react';
import './css/app-text.css';

const AppText = ({ style, ...rest }) => (
  <p
    className=".baseText link"
    {...rest}
    accessibilityRole={rest.href ? 'link' : undefined}
  />
);

export default AppText;
