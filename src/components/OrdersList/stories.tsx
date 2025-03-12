import { Meta, StoryObj } from '@storybook/react'
import OrdersList, { OrdersListProps } from '.'

import itemsMock from './mock'

export default { 
    title: 'Profile/OrdersList', 
    component: OrdersList,
    args: {
        items: itemsMock
    }
} as Meta

 export const Default: StoryObj<OrdersListProps> = (args:any) => (
    <div style={{ maxWidth: 850, margin: 'auto' }}>
    <OrdersList {...args} />
  </div>
 )

 Default.args = {}