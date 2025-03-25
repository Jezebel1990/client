import { Meta, StoryObj } from '@storybook/react';
import CartList, { CartListProps } from '.';

import mockItems from './mock';

const meta: Meta<CartListProps> = {
  title: 'CartList',
  component: CartList,
  args: {
    items: mockItems,
    total: 'R$ 330,00',
  },
  argTypes: {
    items: {
      control: { type: 'object' },
    },
  },
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
};

export default meta;

export const Default: StoryObj<CartListProps> = {
  render: (args) => (
    <div style={{ maxWidth: 800 }}>
      <CartList {...args} />
    </div>
  ),
};

export const WithButton: StoryObj<CartListProps> = {
  render: (args) => (
    <div style={{ maxWidth: 800 }}>
      <CartList {...args} hasButton />
    </div>
  ),
};

export const Empty: StoryObj<CartListProps> = {
  render: () => (
    <div style={{ maxWidth: 800 }}>
      <CartList />
    </div>
  ),
};
