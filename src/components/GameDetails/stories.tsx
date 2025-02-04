import { Meta, StoryObj } from '@storybook/react'
import GameDetails, { GameDetailsProps } from '.'
import mockGame from './mock'

export default { 
  title: 'Game/GameDetails', 
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: mockGame,
  argTypes: {
    releaseDate: {
      control: 'date'
    },
    platforms: {
      control: {
        type: 'inline-check', 
      },
      options: ['windows', 'linux', 'mac']
    },
    genres: {
      control: {
        type: 'inline-check', 
      },
      options: ['Role-playing', 'Narrative']
    }
  }
} as Meta<GameDetailsProps>

export const Default: StoryObj<GameDetailsProps> = {
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <GameDetails {...args} />
    </div>
  ),
  args: {}
}

