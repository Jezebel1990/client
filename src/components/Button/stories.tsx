import { Meta, StoryObj } from '@storybook/react';
 import Button from '.';

 export default {
     title: 'Button',
      component: Button,
      argTypes: {
        children: {
            type: 'string'
        }
      }
} as Meta;
 export const Default: StoryObj = (args: any) => <Button {...args} />

 Default.args = {
    children: 'Buy now'
 }