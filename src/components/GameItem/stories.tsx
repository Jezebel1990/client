import { Meta, StoryObj } from '@storybook/react' 
import GameItem from '.' 

export default { 
    title: 'GameItem', 
    component: GameItem,
    args: {
        img: 'https://i.imgur.com/AcEXOT2.png',
        title: 'Red Dead Redemption 2',
        price: 'R$ 215,00'
      }
} as Meta 

export const Default: StoryObj<GameItemProps> = (args:any) => <GameItem {...args} />

Default.args = {}