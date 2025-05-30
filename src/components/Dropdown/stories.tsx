import { Meta, StoryObj } from '@storybook/react' 
import Dropdown, { DropdownProps } from '.'

export default { 
    title: 'Dropdown',
    component: Dropdown,
    parameters: {
        backgrounds: {
          default: 'won-dark'
        }
      }
} as Meta 

export const Default: StoryObj<DropdownProps> = (args:any) => <Dropdown {...args} />
 
Default.args = {
  title: 'Click here',
  children: 'content'
}