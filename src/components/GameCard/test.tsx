import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from '@/utils/tests/helpers'
import theme from '@/styles/theme'
import GameCard from '.'

const props = {
  slug:'population-zero',
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://i.imgur.com/gQSWehi.png',
  price: 235,
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)
    expect(
      screen.getByRole('heading', { name: props.title }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.developer }),
    ).toBeInTheDocument()
    //   expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
    //     'src',
    //     props.img
    //   )

   expect(screen.getByRole('link', { name: props.title })).toHaveAttribute(
    'href',
     `/game/${props.slug}`
    )

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />)
    const price = screen.getByText('$235.00')
    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary })
  })

  it('should render a line-through in price when promotional', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice={15} />)
    expect(screen.getByText('$235.00')).toHaveStyle({
      textDecoration: 'line-through',
    })
    expect(screen.getByText('$15.00')).not.toHaveStyle({
      textDecoration: 'line-through',
    })
  })

  it('should render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />)
    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })
  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />)
    fireEvent.click(screen.getAllByRole('button')[0])
    expect(onFav).toBeCalled()
  })

  it('should render Ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />,
    )
    const ribbon = screen.getByText(/my ribbon/i)
    expect(ribbon).toHaveStyle({ backgroundColor: '#6d47cc' })
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
    expect(ribbon).toBeInTheDocument()
  })
})
