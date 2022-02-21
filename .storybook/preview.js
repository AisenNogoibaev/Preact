import { h } from 'preact';

export const parameters = {
  layout: 'fullscreen',
  options: {
    storySort: {
      order: [
        'Product Page',
        'Top Bar',
        'Main Nav',
        'Header',
        'Product Select',
        'Hero Carousel',
        'Color Selector',
      ],
    },
  },
};

// Wrap this "decorator" around all stories
export const decorators = [
  (Story) => (
    <div class="app">
      <Story />
    </div>
  ),
];
