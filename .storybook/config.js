import { addParameters, configure } from '@storybook/react';
import theme from './theme';
import '../src/index.scss';
import './storybook.scss';

const req = require.context('./stories', true, /\.stories\.js$/);

addParameters({
  options: {
    theme,
  },
});

function loadStories() {
  require('./welcome.stories')
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
