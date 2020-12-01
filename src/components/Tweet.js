import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const Tweet = props => {
  const { tweetId } = props;
  return <TwitterTweetEmbed tweetId={tweetId} />;
};

export default Tweet;
