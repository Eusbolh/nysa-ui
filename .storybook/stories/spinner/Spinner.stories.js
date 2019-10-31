import React from 'react';
import { storiesOf } from '@storybook/react';
import { renderProps } from './../stories.helpers';
import { action } from '@storybook/addon-actions';
import {
  CodeSnippet,
  Section,
  Story,
  StoryHead,
  StoryContent,
  SectionHead,
  SectionContent,
  ShowCase,
  ShowCaseElement,
} from '../../components';
import {
  Spinner,
} from '../../../src';

const props = [
  {
    default: null,
    name: 'classes',
    required: false,
    type: 'string',
    content: 'CSS class names to override the default styling.',
  }, {
    default: 'small',
    name: 'size',
    required: false,
    type: `string: ['small', 'medium', 'large']`,
    content: 'Width of the spinner circle.',
  }, {
    default: 'light',
    name: 'theme',
    required: false,
    type: `string: ['light', 'dark']`,
    content: `Theme of the spinner.`,
  },
];

storiesOf('Spinner')
  .add('Overview', () => (
    <Story>
      <StoryHead title="Spinner" />
      <StoryContent>
        <Section>
          <SectionContent>
            Spinner is used to indicate progress in a circular fashion.
          </SectionContent>
        </Section>
        <Section>
          <ShowCase>
            <ShowCaseElement title="small-dark">
              <div style={{ width: '24px', height: '24px' }}>
                <Spinner size="small" theme="dark" />
              </div>
            </ShowCaseElement>
            <ShowCaseElement title="medium-dark">
              <div style={{ width: '24px', height: '24px' }}>
                <Spinner size="medium" theme="dark" />
              </div>
            </ShowCaseElement>
            <ShowCaseElement title="large-dark">
              <div style={{ width: '24px', height: '24px' }}>
                <Spinner size="large" theme="dark" />
              </div>
            </ShowCaseElement>
          </ShowCase>
          <ShowCase theme="dark">
            <ShowCaseElement title="small-light">
              <div style={{ width: '24px', height: '24px' }}>
                <Spinner size="small" theme="light" />
              </div>
            </ShowCaseElement>
            <ShowCaseElement title="medium-light">
              <div style={{ width: '24px', height: '24px' }}>
                <Spinner size="medium" theme="light" />
              </div>
            </ShowCaseElement>
            <ShowCaseElement title="large-light">
              <div style={{ width: '24px', height: '24px' }}>
                <Spinner size="large" theme="light" />
              </div>
            </ShowCaseElement>
          </ShowCase>
        </Section>
        <Section>
          <SectionHead title="Props" />
          <SectionContent>
            Specifying an HTML prop will override the component's default for it.
          </SectionContent>
          <SectionContent>
            {renderProps(props)}
          </SectionContent>
        </Section>
      </StoryContent>
    </Story>
  ));