import React from 'react';

const Link = props => {
  const { href, altText, children } = props;

  return (
    <a href={href} alt={altText}>
      {children}
    </a>
  );
};

export default Link;
