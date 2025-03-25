import { Meta, StoryObj } from '@storybook/react';
import CartDropdown, { CartDropdownProps } from '.';

import items from '@/components/CartList/mock';

const meta: Meta<CartDropdownProps> = {
  title: 'CartDropdown',
  component: CartDropdown,
  args: {
    items,
    total: 'R$ 300,00',
  },
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
};

export default meta;

export const Default: StoryObj<CartDropdownProps> = {
  render: (args) => (
    <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
      <CartDropdown {...args} />
    </div>
  ),
  args: {},
};

export const Empty: StoryObj<CartDropdownProps> = {
  render: () => (
    <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
      <CartDropdown />
    </div>
  ),
};
