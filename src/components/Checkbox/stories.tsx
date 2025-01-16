import { Meta, StoryObj } from '@storybook/react';
 import Checkbox, { CheckboxProps } from '.';

  export default { 
    title: 'Checkbox',
    component: Checkbox,
    argTypes: {
      onCheck: { action: 'checked' }
    }
} as Meta;
 export const Default: StoryObj<CheckboxProps> = (args:any) => (
 <Checkbox isChecked {...args} />
 )
 Default.args={}