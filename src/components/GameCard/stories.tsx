import { Meta, StoryObj } from '@storybook/react'
import GameCard, { GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
  args: {
    slug: 'population-zero',
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://i.imgur.com/gQSWehi.png',
    price: 235,
    promotionalPrice: 215,
  },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' },
  },
} as Meta
export const Default: StoryObj<GameCardProps> = (args: any) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

Default.args = {}

export const WithRibbon: StoryObj<GameCardProps> = (args: any) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'small',
  ribbonColor: 'primary',
}
