import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  CodeSnippet,
  Section,
  Story,
  StoryHead,
  StoryContent,
  SectionHead,
  SectionContent,
  Bold,
} from '../components';

storiesOf('nysa-ui', module)
  .add('Quick Start', () => (
    <Story>
      <StoryHead title="Quick Start" />
      <StoryContent>
        <Section>
          <SectionContent>
            Yet another UI library.
          </SectionContent>
        </Section>
        <Section>
          <SectionHead title="Installation" />
          <SectionContent>
            You can install nysa-ui using npm. It has peer dependencies on <b>react</b> and <b>react-dom</b>, so make sure that these two packages are installed before starting to use nysa-ui.
            <CodeSnippet>
              $ npm install nysa-ui
            </CodeSnippet>
          </SectionContent>
        </Section>
        <Section>
          <SectionHead title="Import" />
          <SectionContent>
            You can import React components from the package.
            <CodeSnippet>
              {`import { Button } from 'nysa-ui';`}
              <br />
              <br />
              {`<Button intent="success" text="Click me!" />`}
            </CodeSnippet>
          </SectionContent>
        </Section>
      </StoryContent>
    </Story>
  ));