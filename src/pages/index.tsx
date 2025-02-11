import Home, { HomeTemplateProps } from '../templates/Home'
import bannersMock from '../../src/components/BannerSlider/mock'
import gamesMock from '../../src/components/GameCardSlider/mock'
import highlightMock from '../../src/components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcommingGames: gamesMock,
      upcommingHighligth: highlightMock,
      upcommingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighligth: highlightMock,
    },
  }
}
