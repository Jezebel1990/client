import { Meta, StoryObj } from '@storybook/react' 

import CartIcon, { CartIconProps} from '.' 

export default { 
    title: 'CartIcon', 
    component: CartIcon,
    parameters: {
        backgrounds: {
          default: 'won-dark'
        }
      }
} as Meta 

export const Default: StoryObj = () => <CartIcon />
export const withItems: StoryObj<CartIconProps> = (args:any) => <CartIcon {...args} />

Default.args = {}

withItems.args = {
  quantity: 3
}