import { Meta, StoryObj } from '@storybook/react' 
import TextContent, { TextContentProps } from '.' 
import textMock from './mock'

export default {
     title: 'TextContent', 
     component:TextContent,
     args: textMock,
     parameters: {
       backgrounds: {
         default: 'won-dark'
       }
     }
} as Meta 
export const Default: StoryObj<TextContentProps> = {
    render: (args) => (
    <TextContent {...args} />
),
args: {},
}