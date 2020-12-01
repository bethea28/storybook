/* eslint-disable react/prop-types */
import AppText from './app-text';
import insertBetween from './insert-between';
import React from 'react';
import './css/doc-item.css';

const Divider = () => (
  <div className="verticalDivider" style={styles.verticalDivider} />
);

const DocItem = ({ description, example = {}, name, typeInfo, label }) => (
  <div className="example">
    {name && (
      <AppText className="title" Nastyle={styles.title}>
        <PropText label={label} name={name} typeInfo={typeInfo} />
      </AppText>
    )}
    {description && (
      <div className="description">
        {insertBetween(
          () => (
            <Divider key={Math.random()} />
          ),
          React.Children.toArray(description),
        )}
      </div>
    )}
    {(example.render || example.code) && (
      <div className="renderBox">
        <AppText className="exampleText">Example</AppText>
        {example.render && <div>{example.render()}</div>}
        {example.render && example.code && <div className="verticalDivider" />}
        {example.code && <p className="code">{example.code}</p>}
      </div>
    )}
  </div>
);

const PropText = ({ label, name, typeInfo }) => (
  <AppText>
    {label && (
      <p className="label webLabel">
        {/* <p className="label webLabel" style={[styles.label, label === 'web' && styles.webLabel]}> */}
        {label}
      </p>
    )}
    <p className="propName">{name}</p>
    {typeInfo && (
      <p>
        {': '}
        <p className="code">{typeInfo}</p>
      </p>
    )}
  </AppText>
);

export default DocItem;
