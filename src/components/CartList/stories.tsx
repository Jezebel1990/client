import { Meta, StoryObj } from '@storybook/react' 
import CartList, { CartListProps } from '.'

import mockItems from './mock'


 export default {
     title: 'CartList',
    component: CartList,
      args: {
        items: mockItems,
        total: 'R$ 330,00'
      },
      argTypes: {
        items: {
          type: 'string'
        }
      },
      parameters: {
        backgrounds: {
          default: 'won-dark'
        }
      }
 } as Meta 
 
 
 export const Default: StoryObj<CartListProps> = (args: any) => (
    <div style={{ maxWidth: 800 }}>
    <CartList {...args} />
  </div>
 ) 

Default.args = {}