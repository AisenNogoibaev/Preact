const path = require("path");

module.exports = {
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  stories: [
    "../src/stories/**/*.stories.js",
    "../src/stories/**/*.stories.tsx",
  ],
  logLevel: "debug",
  addons: [
    "@storybook/addon-storysource",
    "@storybook/addon-actions",
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-viewport",
    "@storybook/addon-backgrounds",
    "@storybook/addon-a11y",
  ],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: [/\.stories\.js$/],
      use: [require.resolve("@storybook/source-loader")],
      include: [path.resolve(__dirname, "../src")],
      enforce: "pre",
    });
    config.module.rules.push({
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
      ],
    });
    // config.module.rules.push({
    //   test: /\.tsx?$/,
    //   loader: "ts-loader",
    //   options: {
    //     // transpileOnly is useful to skip typescript checks occasionally:
    //     transpileOnly: true,
    //   },
    // });
    return config;
  },
  core: {
    builder: "webpack4",
  },
};
