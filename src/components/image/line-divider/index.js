/* @flow */

import React, { Component } from 'react';
import { render } from 'react-dom';
import './line-divider.css';

type Props = {
  style?: Styles,
  colors?: Array<Object>,
  small?: boolean,
};

class LineDivider extends Component<Props> {
  render() {
    const { small } = this.props;
    const style = small ? { ...this.props.style, height: 2 } : this.props.style;
    const colors = small ? [{ flex: 1, color: 'black' }] : this.props.colors;

    return (
      <div className="container">
        {colors.map(c => (
          <div
            key={c.color + c.flex}
            style={{
              flex: c.flex || 1,
              backgroundColor: c.color,
            }}
          />
        ))}
      </div>
    );
  }
}

export default LineDivider;
