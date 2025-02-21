import { Meta, StoryObj } from '@storybook/react'

import PaymentOptions, { PaymentOptionsProps } from '.' 
import cardsMock from './mock'


export default {
    title: 'PaymentOptions', 
    component: PaymentOptions,
    args: {
        cards: cardsMock
        },
  argTypes: {
    cards: {
      type: 'string'
    },
    handlePayment: {
      action: 'clicked'
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
      }
} as Meta 


export const Default: StoryObj<PaymentOptionsProps> = (args:any) => (
     <div style={{ padding: 16, maxWidth: 400 }}>
    <PaymentOptions {...args} />
    </div>
)

Default.args = {}