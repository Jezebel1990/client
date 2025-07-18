import Base from '@/templates/Base'

import { BannerProps } from '../../components/Banner'
import { GameCardProps } from '../../components/GameCard'
import { HighlightProps } from '../../components/Highlight'

import { Container } from '../../components/Container'

import BannerSlider from '../../components/BannerSlider'
import Showcase from '@/components/Showcase'
import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  freeGames: GameCardProps[]
  freeHighlight: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcomingGames,
  upcomingHighlight,
  freeGames,
  freeHighlight,
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title="News" games={newGames} />
    </S.SectionNews>

    <Showcase
      title="Most Popular"
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />

      <Showcase 
        title="Upcoming"
        games={upcomingGames}
        highlight={upcomingHighlight}
      />

    <Showcase title="Free games" highlight={freeHighlight} games={freeGames} />
  </Base>
)

export default Home
