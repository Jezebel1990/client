import { Meta } from '@storybook/react';
 import Menu from '.'; 

 export default {
     title: 'Menu',
      component: Menu,
      parameters: {
        layout: 'fullscreen',
        backgrounds: {
          default: 'won-dark'
        }
    } 
    } as Meta;

 export function Default(args: any) {
    return <Menu {...args} />
 }
