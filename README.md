# Setup

```bash
npm install
npm run storybook
```

# Components

Components should be created in `src/components/ComponentName` and should export a single named function. They should also export `TypeScript` prop definitions. Styles should be placed in `style.css` for each component. Components should be developed with Preact and written in TypeScript. Files must end in `.tsx`.

# Stories

Each component should have a Story created for it. The story should provide mock data and mock functions (if needed) to the component.

# Development

Running `npm run storybook` will start the Storybook server and provide hot reloading of components and css in the Stories.
