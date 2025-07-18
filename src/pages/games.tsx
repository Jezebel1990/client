import { initializeApollo } from '@/utils/apollo'
import { QUERY_GAMES } from '@/graphql/queries/games'
import { QueryGames, QueryGamesVariables } from '@/graphql/generated/QueryGames'

import GamesTemplate, { GamesTemplateProps } from '@/templates/Games'
import filterItemsMock from '@/components/ExploreSidebar/mock'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  return {
    props: {
      revalidate: 60,
      games: data.games.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0]?.name || 'Unknown',
        img: game.cover?.url
          ? `http://localhost:1337${game.cover.url}`
          : 'https://i.imgur.com/nCI1sci.jpeg',
        price: game.price
      })),
      filterItems: filterItemsMock
    }
  }
}
