import { Meta, StoryObj } from '@storybook/react';

import { GameCardProps } from 'components/GameCard';
 import GameCardSlider from '.';

 const items = [
    {
      title: 'Population Zero',
      developer: 'Rockstar Games',
      img: 'https://i.imgur.com/Wbk7IgR.png',
      price: 'R$ 235,00',
      promotionalPrice: 'R$ 215,00'
    },
    {
      title: 'Population Zero',
      developer: 'Rockstar Games',
      img: 'https://i.imgur.com/n49XB78.png',
      price: 'R$ 235,00',
      promotionalPrice: 'R$ 215,00'
    },
    {
      title: 'Population Zero',
      developer: 'Rockstar Games',
      img: 'https://i.imgur.com/Ug0HjRo.png',
      price: 'R$ 235,00',
      promotionalPrice: 'R$ 215,00'
    },
    {
      title: 'Population Zero',
      developer: 'Rockstar Games',
      img: 'https://i.imgur.com/7ova9KM.png',
      price: 'R$ 235,00',
      promotionalPrice: 'R$ 215,00'
    },
    {
      title: 'Population Zero',
      developer: 'Rockstar Games',
      img: 'https://i.imgur.com/q1E3NnO.png',
      price: 'R$ 235,00',
      promotionalPrice: 'R$ 215,00'
    },
    {
      title: 'Population Zero',
      developer: 'Rockstar Games',
      img: 'https://i.imgur.com/GzoqQHk.png',
      price: 'R$ 235,00',
      promotionalPrice: 'R$ 215,00'
    }
  ]


  export default { 
    title: 'GameCardSlider',
     component: GameCardSlider,
     args: { items },
     parameters: {
       layout: 'fullscreen',
       backgrounds: {
         default: 'dark'
       }
     }
} as Meta;

export const Default: StoryObj<{ items: GameCardProps[] }> = {
    render: (args) => (
      <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
        <GameCardSlider items={args.items} />
      </div>
    ),
  };
