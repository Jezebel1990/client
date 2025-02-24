import { Meta, StoryObj } from '@storybook/react'
import ProfileMenu from '.' 


export default { 
    title: 'ProfileMenu', 
    component: ProfileMenu,
    parameters: {
        backgrounds: {
          default: 'won-dark'
        }
      }
} as Meta 

export const Default: StoryObj = () => <ProfileMenu />

Default.args = {}