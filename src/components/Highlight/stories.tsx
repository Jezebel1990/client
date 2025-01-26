import { Meta, StoryObj } from '@storybook/react'
import Highlight, { HighlightProps } from '.'

import item from './mock'

export default {
  title: 'Highlight',
  component: Highlight,
  args: { ...item },
} as Meta

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
  floatImage: 'https://i.imgur.com/2X5uxOB.png',
}

Default.args = {}
