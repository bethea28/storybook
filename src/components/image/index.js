import React from 'react';

type Props = {
  imgSrc: string,
  altText: stirng,
  style?: Object,
};

const Image = props => {
  const { imgSrc, altText, styles } = props;

  return <img style={styles} src={imgSrc} alt={altText} />;
};

export default Image;
