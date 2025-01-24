import { Meta, StoryObj } from '@storybook/react'
import Banner, { BannerProps} from '.'

export default {
 title: 'Banner',
 component: Banner,
 argTypes: {
    ribbon: {
      type: 'string'
    }
  },
 args: {
    img: 'https://o2filmes.com/wp-content/uploads/2021/01/IMAGEM-1-1042x580.jpg',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
 }
} as Meta


export const Default: StoryObj<BannerProps> = (args: any) => <Banner {...args} />

Default.parameters = {
    layout: 'fullscreen'
}

export const WithRibbon: StoryObj<BannerProps> = (args: any) => (
    <div style={{ maxWidth: '104rem',  margin: '0 auto'  }}>
      <Banner {...args} />
    </div>
  )
  WithRibbon.args = {
    ribbon: '20% OFF',
    ribbonSize: 'normal',
    ribbonColor: 'primary'
  }