import type { Meta, StoryObj } from '@storybook/vue3';

import HelloWorld from './HelloWorld.vue';

const meta = {
  title: 'Example/HelloWorld',
  component: HelloWorld,
  tags: ['autodocs'],
  argTypes: {
    msg: { control: 'text' },
  },
  args: { primary: false },
} satisfies Meta<typeof HelloWorld>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ShortText: Story = {
  args: {
    msg: 'Hey there!',
  },
};

export const LongText: Story = {
  args: {
    msg: 'Proin ut consequat sem. Praesent tempus eleifend imperdiet. Integer massa ante, dapibus vel sapien sit amet, ultrices blandit quam. Donec condimentum, erat eu consequat hendrerit, sapien orci aliquam libero, vitae consectetur urna sapien ut massa. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
  },
};
