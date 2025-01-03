import { Meta, StoryObj } from '@storybook/react';

import { GameCardProps } from 'components/GameCard';
 import GameCardSlider from '.';

import items from './mock';

  export default { 
    title: 'GameCardSlider',
     component: GameCardSlider,
     args: { items },
     parameters: {
       layout: 'fullscreen',
       backgrounds: {
         default: 'won-dark'
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
