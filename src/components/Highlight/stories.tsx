import { Meta, StoryObj } from '@storybook/react';
 import Highlight, { HighlightProps } from '.';



  export default { 
    title: 'Highlight',
     component: Highlight,
     args: {
        title: 'Read Dead is back!',
        subtitle: 'Come see John’s new adventures',
        backgroundImage: 'https://i.imgur.com/7O2B4oz.jpeg',
        buttonLabel: 'Buy now',
        buttonLink: '/games/rdr2',
      }
} as Meta;
 export const Default: StoryObj<HighlightProps> = (args: any) => (
  <div style={{ maxWidth: '104rem' }}>
 <Highlight {...args} /> 
 </div>
 )

 export const WithFloatImage: StoryObj<HighlightProps> = (args: any) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

WithFloatImage.args = {
  floatImage: 'https://i.imgur.com/2X5uxOB.png'
}

 Default.args = {}