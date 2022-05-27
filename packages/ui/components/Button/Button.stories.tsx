import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './Button';

const defaultProps = {
  children: 'Hello world',
};

const meta: ComponentMeta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  args: defaultProps,
};

export default meta;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'secondary',
};
