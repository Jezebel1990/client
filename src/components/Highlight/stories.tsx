import { Meta, StoryObj } from '@storybook/react';
 import Highlight, { HighlightProps } from '.';



  export default { 
    title: 'Highlight',
     component: Highlight,
     args: {
        title: 'Read Dead it’s back',
        subtitle: 'Come see John’s new adventures',
        backgroundImage: 'https://i.imgur.com/7O2B4oz.jpeg',
        buttonLabel: 'Buy now',
        buttonLink: '/rdr2',
      }
} as Meta;
 export const Default: StoryObj<HighlightProps> = (args: any) => <Highlight {...args} /> 

 Default.args = {}