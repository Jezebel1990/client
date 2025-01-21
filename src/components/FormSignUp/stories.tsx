import { Meta, StoryObj } from '@storybook/react';
 import FormSignUp from '.';

 export default { 
    title: 'Form/FormSignUp',
    component: FormSignUp
} as Meta;

 export const Default: StoryObj = () => (
    <div style={{ width: 300, margin: 'auto' }}>
    <FormSignUp />
  </div>
 )

 Default.args = {}