import { Meta, StoryObj } from '@storybook/react'
import Heading, { HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string',
    },
  },
} as Meta

export const Default: StoryObj<HeadingProps> = (args: any) => (
  <Heading {...args} />
)

Default.args = {
  children: 'Most Populars',
}
