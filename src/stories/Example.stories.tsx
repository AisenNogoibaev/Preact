/** @jsx h */
import { h } from 'preact';
import { Example, ExampleProps } from '../components/Example/Example';

/*
  Mock data should be created for the story and exported. The
  naming convension should be componentNameMock.
*/
export const exampleMock: ExampleProps = {
  message: 'Hello World',
  onClickHandler: () => {
    console.log('I was clicked');
  },
};

const title = 'Example';
export default {
  title,
  component: Example,
  excludeStories: /.*Mock$/, // This is required so Storybook will ignore the props export
};

// spread the mock props into the component
export const ExampleStory = () => <Example {...exampleMock} />;

ExampleStory.storyName = title;
