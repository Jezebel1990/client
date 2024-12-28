import { Meta, StoryObj } from '@storybook/react';
 import BannerSlider, { BannerSliderProps } from '.'; 

 const items = [
    {
      img: 'https://i.imgur.com/2sLA64A.png',
      title: 'Defy death 1',
      subtitle: '<p>Play the new <strong>CrashLands</strong> season',
      buttonLabel: 'Buy now',
      buttonLink: '/games/defy-death',
      ribbon: 'Bestselling'
    },
    {
      img: 'https://i.imgur.com/zHJVylG.png',
      title: 'Defy death 2',
      subtitle: '<p>Play the new <strong>CrashLands</strong> season',
      buttonLabel: 'Buy now',
      buttonLink: '/games/defy-death'
    },
    {
      img: 'https://i.imgur.com/v3fISXn.png',
      title: 'Defy death 3',
      subtitle: '<p>Play the new <strong>CrashLands</strong> season',
      buttonLabel: 'Buy now',
      buttonLink: '/games/defy-death'
    }
  ]
 
 export default { 
    title: 'BannerSlider',
    component: BannerSlider,
    args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta;
 export const Default: StoryObj<BannerSliderProps> = (args: any) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <BannerSlider {...args} />
    </div>
  )


  Default.args = {}