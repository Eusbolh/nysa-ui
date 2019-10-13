import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { Story, StoryHead } from '../components';

storiesOf('nysa-ui', module)
  .add('Quick Start', () => (
    <Story>
      <StoryHead
        title="Quick Start"
      />
    </Story>
  ));