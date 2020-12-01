import React from 'react';

const Video = props => {
  const { video } = props;

  const iframeStyle = {
    display: 'block',
    position: 'absolute',
    top: '0',
    left: '0',
  };

  return (
    <iframe
      id="ytplayer"
      type="text/html"
      width="100%"
      height="100%"
      src={video}
      frameBorder="0"
      style={iframeStyle}
      title="MLS Video"
    />
  );
};

export default Video;
