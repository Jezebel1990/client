import { Meta, StoryObj } from '@storybook/react'
import Showcase, { ShowcaseProps } from '.'
import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (StoryObj) => (
      <div style={{ margin: '0 auto' }}>
        <StoryObj />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta
export const Default: StoryObj<ShowcaseProps> = (args: any) => (
  <Showcase {...args} />
)

Default.args = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: gamesMock,
}
export const WithoutHighlight: StoryObj<ShowcaseProps> = (args: any) => (
  <Showcase {...args} />
)
WithoutHighlight.args = {
  title: 'Most Popular',
  games: gamesMock,
}
export const WithoutGames: StoryObj<ShowcaseProps> = (args: any) => (
  <Showcase {...args} />
)
WithoutGames.args = {
  title: 'Most Popular',
  highlight: highlightMock,
}
