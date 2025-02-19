import { Meta, StoryObj } from '@storybook/react' 
import GameItem, { GameItemProps } from '.' 

export default { 
    title: 'GameItem', 
    component: GameItem,
    args: {
        img: 'https://i.imgur.com/AcEXOT2.png',
        title: 'Red Dead Redemption 2',
        price: 'R$ 215,00'
      }
} as Meta 

export const Default: StoryObj<GameItemProps> = (args:any) => <GameItem {...args} />

export const WithPayment: StoryObj<GameItemProps> = (args:any) => (
  <GameItem {...args} />
)
WithPayment.args = {
  downloadLink: 'https://wongames.com/game/download/21312ndasd',
  paymentInfo: {
    flag: 'mastercard',
    img: '/img/master-card.png',
    number: '**** **** **** 4326',
    purchaseDate: 'Purchase made on 07/20/2024 at 20:32'
  }
}

Default.args = {}