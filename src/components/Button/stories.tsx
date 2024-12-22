import { Meta, StoryObj } from '@storybook/react';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';
import Button, { ButtonProps } from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      control: 'text', 
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'], 
      },
    },
    minimal: {
      control: 'boolean', 
    },
    icon: {
      control: false, 
    },
    as: {
      control: false, 
    },
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {
  args: {
    children: 'Buy now',
  },
};

export const withIcon: StoryObj<ButtonProps> = {
  args: {
    size: 'small',
    children: 'Buy now',
    icon: <AddShoppingCart />,
  },
};

export const asLink: StoryObj<ButtonProps> = {
  args: {
    size: 'large',
    children: 'Buy now',
    as: 'a',
    href: '/link',
  },
};
