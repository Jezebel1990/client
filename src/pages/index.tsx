import { gql, useQuery } from '@apollo/client'

import Home, { HomeTemplateProps } from '../templates/Home/index'
import bannersMock from '../../src/components/BannerSlider/mock'
import gamesMock from '../../src/components/GameCardSlider/mock'
import highlightMock from '../../src/components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
const { data, loading, error } = useQuery(gql`
    query getGames {
      games {
      name
    }
  }
`)
if (loading) return <p>Loading...</p>
if (error) return <p>{error.message}</p>
if (data) return <p>{JSON.stringify(data, null, 2)}</p>

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
