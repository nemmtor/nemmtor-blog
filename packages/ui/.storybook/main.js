const loadStories = folderName => [
  `../${folderName}/**/*.stories.mdx`,
  `../${folderName}/**/*.stories.@(js|jsx|ts|tsx)`,
];

module.exports = {
  stories: [...loadStories('components')],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
};
