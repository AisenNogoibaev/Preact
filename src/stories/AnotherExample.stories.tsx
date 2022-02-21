/** @jsx h */
import { h } from 'preact';
import {
  AnotherExample,
  AnotherExampleProps,
} from '../components/AnotherExample/AnotherExample';

/*
  Mock data should be created for the story and exported. The
  naming convension should be componentNameMock.
*/
export const anotherExampleMock: AnotherExampleProps = {
  message: 'Goodbye Moon',
  onClickHandler: () => {
    console.log('I was also clicked');
  },
};

const title = 'Another Example';
export default {
  title,
  component: AnotherExample,
  excludeStories: /.*Mock$/, // This is required so Storybook will ignore the props export
};

// spread the mock props into the component
export const AnotherExampleStory = () => (
  <AnotherExample {...anotherExampleMock} />
);

AnotherExampleStory.storyName = title;
