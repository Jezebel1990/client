import { gql } from '@apollo/client'

import Home, { HomeTemplateProps } from '../templates/Home/index'
import bannersMock from '../../src/components/BannerSlider/mock'
import gamesMock from '../../src/components/GameCardSlider/mock'
import highlightMock from '../../src/components/Highlight/mock'
import { initializeApollo } from '@/utils/apollo'

const GET_GAMES = gql`
   query getGames {
     games {
       name
  }

 }
 `

 export default function Index(props: HomeTemplateProps) {
   if (props.data) return <p>{JSON.stringify(props.data, null, 2)}</p>
  
  return <Home {...props} />
}

export async function getServerSideProps() {

const apolloClient = initializeApollo()
 
const { data } = await apolloClient.query({ query: GET_GAMES })

  return {
    props: {
      data: data,
      initialApolloState: apolloClient.cache.extract(),
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
