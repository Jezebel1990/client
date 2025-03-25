import { Meta, StoryObj } from '@storybook/react'
import CartDropdown, { CartDropdownProps } from '.' 

import items from '@/components/CartList/mock'

export default { 
    title: 'CartDropdown', 
    component: CartDropdown,
    args: {
        items,
        total: 'R$ 300,00'
      },
      parameters: {
        backgrounds: {
          default: 'won-dark'
        }
      }
} as Meta 

export const Default: StoryObj<CartDropdownProps> = (args:any) => (
    <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
      <CartDropdown {...args} />
    </div>
  )

Default.args = {}