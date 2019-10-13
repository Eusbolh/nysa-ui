import React from 'react';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';

storiesOf('Home', module)
  .add('Welcome', () => (
    <div className="story">
      <div className="story-title">Welcome</div>
      <div className="story-description">Welcome to nysa-ui <span className="story-todo">@todo: update description</span></div>
    </div>
  ));