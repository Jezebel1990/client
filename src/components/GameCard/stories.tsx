import { Meta, StoryObj } from '@storybook/react';
 import GameCard, { GameCardProps } from '.';
 
 export default { 
    title: 'GameCard',
     component: GameCard,
     args: {
        title: 'Population Zero',
        developer: 'Rockstar Games',
        img: 'https://app2top.com/wp-content/uploads/2024/03/Proektirovanie-boevoj-sistemy--300x140.png',
        price: 'R$ 235,00',
        promotionalPrice: 'R$ 200,00'
    },
    argTypes: {
        onFav: { action: 'clicked' }
      },
    parameters: {
      backgrounds: {
        default: 'dark'
      }
      }
} as Meta;
 export const Default: StoryObj<GameCardProps> = (args:any) => (
   <div style={{ width: '30rem'}}>
     <GameCard {...args} />
   </div>
 )
 
 Default.args = {}