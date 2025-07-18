import Home, { HomeTemplateProps } from '../templates/Home/index'
import gamesMock from '../../src/components/GameCardSlider/mock'
import highlightMock from '../../src/components/Highlight/mock'
import { initializeApollo } from '@/utils/apollo'
import { QueryHome } from '../graphql/generated/QueryHome'
import { QUERY_HOME } from '../graphql/queries/home'

export default function Index(props: HomeTemplateProps) {

  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections }
  } = await apolloClient.query<QueryHome>({ query: QUERY_HOME })

  return {
    props: {
      revalidate: 10,
      banners: banners.map((banner) => ({
        img: `http://localhost:1337${banner.image?.url}`,
        title: banner.title,
        subtitle: banner.subtitle,
        buttonLabel: banner.button?.label,
        buttonLink: banner.button?.link,
        ...(banner.ribbon && {
          ribbon: banner.ribbon.text,
          ribbonColor: banner.ribbon.color,
          ribbonSize: banner.ribbon.size
        })
      })),
      newGames: newGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0]?.name || 'Unknown',
        img: game.cover?.url
          ? `http://localhost:1337${game.cover.url}`
          : 'https://i.imgur.com/nCI1sci.jpeg',
        price: game.price
      })),
      mostPopularHighlight: highlightMock,
      mostPopularGames: sections!.popularGames!.games.map((game) => ({
      title: game.name,
        slug: game.slug,
        developer: game.developers[0]?.name || 'Unknown',
        img: game.cover?.url
          ? `http://localhost:1337${game.cover?.url}`
          : 'https://i.imgur.com/nCI1sci.jpeg',
        price: game.price
      })),
        upcomingGames: upcomingGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0]?.name || 'Unknown',
        img: game.cover?.url
          ? `http://localhost:1337${game.cover?.url}`
          : 'https://i.imgur.com/nCI1sci.jpeg',
        price: game.price
      })),
      upcomingHighligth: highlightMock,
      freeGames: freeGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0]?.name || 'Unknown',
        img: game.cover?.url
          ? `http://localhost:1337${game.cover?.url}`
          : 'https://i.imgur.com/nCI1sci.jpeg',
        price: game.price
      })),

      freeHighligth: highlightMock,
    },
  }
}
