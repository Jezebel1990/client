import { Meta, StoryObj } from '@storybook/react';
 import Checkbox, { CheckboxProps } from '.';

  export default { 
    title: 'Checkbox',
    component: Checkbox
} as Meta;
 export const Default: StoryObj<CheckboxProps> = (args:any) => <Checkbox {...args} />

 Default.args={}