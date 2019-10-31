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
  Button,
} from '../../../src';

const props = [
  {
    default: 'false',
    name: 'anchor',
    required: false,
    type: 'boolean',
    content: 'If it is set to true, the button will be an anchor button and you will be able to interact it with mouse middle click.',
  }, {
    default: null,
    name: 'children',
    required: false,
    type: 'node',
    content: 'It is used to display whatever you include between the opening and closing tags of the component. If it is set, it will override the text prop.',
  },  {
    default: null,
    name: 'classes',
    required: false,
    type: 'string',
    content: 'CSS class names to override the default styling.',
  },{
    default: 'false',
    name: 'disabled',
    required: false,
    type: 'boolean',
    content: 'If it is set to true, the button cannot be activated (clicked on, hovered on etc.).',
  }, {
    default: null,
    name: 'href',
    required: false,
    type: 'string',
    content: 'It is used when anchor prop is set to true. When anchor button is middle clicked, the page is redirected to the URL provided with this prop.',
  }, {
    default: 'default',
    name: 'intent',
    required: false,
    type: 'string',
    content: 'Visual intent type to be applied to the element.',
  }, {
    default: 'false',
    name: 'loading',
    required: false,
    type: 'boolean',
    content: 'It it is set to true, the button will display a spinner on the middle instead of its content. The element will not be able for interactions.',
  }, {
    default: 'false',
    name: 'minimal',
    required: false,
    type: 'boolean',
    content: 'Whether this button should use minimal styles',
  }, {
    default: null,
    name: 'onClick',
    required: false,
    type: 'func: () => ...',
    content: 'The function to be called when button is clicked on.',
  }, {
    default: 'light',
    name: 'spinnerTheme',
    required: false,
    type: `string: ['light', 'dark']`,
    content: `Spinner's theme to be shown when loading props is set to true.`,
  }, {
    default: null,
    name: 'text',
    required: false,
    type: 'string',
    content: 'Button text. It will be overrided if children prop is set.',
  }, {
    defualt: 'button',
    name: 'type',
    required: false,
    type: `string: ['button', 'reset', 'submit']`,
    content: 'HTML type attribute of the button.',
  },
];

storiesOf('Button')
  .add('Overview', () => (
    <Story>
      <StoryHead title="Button" />
      <StoryContent>
        <Section>
          <SectionContent>
            Button trigger actions when clicked.
          </SectionContent>
        </Section>
        <Section>
          <ShowCase>
            <ShowCaseElement title="default">
              <Button intent="default" onClick={action('Default button is clicked!')}>
                Default
              </Button>
            </ShowCaseElement>
            <ShowCaseElement title="primary">
              <Button intent="primary" onClick={action('Primary button is clicked!')}>
                Primary
              </Button>
            </ShowCaseElement>
            <ShowCaseElement title="success">
              <Button intent="success" onClick={action('Success button is clicked!')}>
                Success
              </Button>
            </ShowCaseElement>
            <ShowCaseElement title="danger">
              <Button intent="danger" onClick={action('Danger button is clicked!')}>
                Danger
              </Button>
            </ShowCaseElement>
            <ShowCaseElement title="warning">
              <Button intent="warning" onClick={action('Warning button is clicked!')}>
                Warning
              </Button>
            </ShowCaseElement>
            <ShowCaseElement title="disabled">
              <Button disabled onClick={action('Disabled button is clicked!')}>
                Disabled
              </Button>
            </ShowCaseElement>
            <ShowCaseElement title="minimal">
              <Button minimal onClick={action('Minimal button is clicked!')}>
                Minimal
              </Button>
            </ShowCaseElement>
            <ShowCaseElement title="anchor">
              <Button anchor href="https://google.com" onClick={action('Anchor button is clicked!')}>
                Anchor
              </Button>
            </ShowCaseElement>
            <ShowCaseElement title="loading">
              <div style={{ width: '100px' }}>
                <Button intent="primary" loading onClick={action('Loading button is clicked!')}>
                  Loading
                </Button>
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