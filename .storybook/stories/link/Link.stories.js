import React from 'react';
import { storiesOf } from '@storybook/react';
import { renderProps } from './../stories.helpers';
import { action } from '@storybook/addon-actions';
import {
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
  Link,
} from '../../../src';

const props = [
  {
    default: null,
    name: 'children',
    required: false,
    type: 'node',
    content: 'It is used to display whatever you include between the opening and closing tags of the component. If it is set, it will override the text prop.',
  }, {
    default: null,
    name: 'classes',
    required: false,
    type: 'string',
    content: 'CSS class names to override the default styling.',
  }, {
    default: null,
    name: 'href',
    required: false,
    type: 'string',
    content: 'When link is middle clicked, the page is redirected to the URL provided with this prop.',
  }, {
    default: 'default',
    name: 'intent',
    required: false,
    type: 'string',
    content: 'Visual intent type to be applied to the element.',
  }, {
    default: null,
    name: 'onClick',
    required: false,
    type: 'func: () => ...',
    content: 'The function to be called when button is clicked on.',
  }, {
    default: null,
    name: 'text',
    required: false,
    type: 'string',
    content: 'Link text. It will be overrided if children prop is set.',
  },
];

storiesOf('Link')
  .add('Overview', () => (
    <Story>
      <StoryHead title="Link" />
      <StoryContent>
        <Section>
          <SectionContent>
            Spinner is used to indicate progress in a circular fashion.
          </SectionContent>
        </Section>
        <Section>
          <ShowCase>
            <ShowCaseElement title="default">
              <Link
                href="http://kunnect.co"
                intent="default"
                onClick={action('Link is clicked!')}
                text="Default"
              />
            </ShowCaseElement>
            <ShowCaseElement title="primary">
              <Link
                href="http://kunnect.co"
                intent="primary"
                onClick={action('Link is clicked!')}
                text="Primary"
              />
            </ShowCaseElement>
            <ShowCaseElement title="success">
              <Link
                href="http://kunnect.co"
                intent="success"
                onClick={action('Link is clicked!')}
                text="Success"
              />
            </ShowCaseElement>
            <ShowCaseElement title="danger">
              <Link
                href="http://kunnect.co"
                intent="danger"
                onClick={action('Link is clicked!')}
                text="Danger"
              />
            </ShowCaseElement>
            <ShowCaseElement title="warning">
              <Link
                href="http://kunnect.co"
                intent="warning"
                onClick={action('Link is clicked!')}
                text="Warning"
              />
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