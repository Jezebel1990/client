import { Meta, StoryObj } from '@storybook/react';
 import GameCard, { GameCardProps } from '.';
 
 export default { 
    title: 'GameCard',
     component: GameCard,
     parameters: {
      backgrounds: {
        default: 'won-dark'
      }
    },
     args: {
        title: 'Population Zero',
        developer: 'Rockstar Games',
        img: 'https://app2top.com/wp-content/uploads/2024/03/Proektirovanie-boevoj-sistemy--300x140.png',
        price: 'R$ 235,00',
        promotionalPrice: 'R$ 215,00'
    },
    argTypes: {
      onFav: { action: 'clicked' },
    ribbon: { type: 'string' }
      }
} as Meta;
 export const Default: StoryObj<GameCardProps> = (args:any) => (
   <div style={{ width: '30rem'}}>
     <GameCard {...args} />
   </div>
 )
 
 Default.args = {}

 export const WithRibbon: StoryObj<GameCardProps> = (args: any) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

 WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'small',
  ribbonColor: 'primary'
}