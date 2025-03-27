import { Meta, StoryObj } from '@storybook/react'
import Menu, { MenuProps } from '.'

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: StoryObj<MenuProps> = (args: any) => <Menu {...args} />

export const Logged: StoryObj<MenuProps> = (args: any) => <Menu {...args} />
 
 Logged.args = {
   username: 'John Doe'
}

Default.args = {}