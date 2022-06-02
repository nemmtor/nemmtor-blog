import { addDecorator } from '@storybook/react';
import { Layout } from '../src/Layout';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(storyFn => <Layout>{storyFn()}</Layout>);
