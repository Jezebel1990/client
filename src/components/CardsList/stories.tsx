import { Meta, StoryObj } from '@storybook/react' 
import CardsList, { CardsListProps} from '.' 

import cardsMock from '@/components/PaymentOptions/mock'

export default {
     title: 'Profile/CardsList',
     component: CardsList,
     args: {
        cards: cardsMock
      }
} as Meta 

export const Default: StoryObj<CardsListProps> = (args:any) => (
    <div style={{ maxWidth: 850, margin: 'auto' }}>
    <CardsList {...args} />
  </div>
)

Default.args = {}