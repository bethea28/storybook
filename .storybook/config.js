import { configure } from '@storybook/html';

// automatically import all files ending in *.stories.js
// const req = require.context('../stories', true, /\.stories\.js$/);
const req = require.context(
  '../src/components/', // path where stories live
  true, // recursive?
  /\__stories__\/.*.js$/, // story files match this pattern
);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
