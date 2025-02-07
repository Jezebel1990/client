import { Meta, StoryObj } from '@storybook/react'

import Gallery, { GalleryProps } from '.'
import items from './mock'

export default {
  title: 'Gallery',
  component: Gallery,
  args: {
    items,
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta

export const Default: StoryObj<GalleryProps> = {
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <Gallery {...args} />
    </div>
  ),
  args: {},
}
