import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers';
import theme from 'styles/theme'
import GameCard from '.';

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://app2top.com/wp-content/uploads/2024/03/Proektirovanie-boevoj-sistemy--300x140.png',
  price: 'R$ 235,00'
}


describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)
    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })


  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />)
    const price = screen.getByText('R$ 235,00')
    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary })
})

it('should render a line-through in price when promotional', () => {
  renderWithTheme(<GameCard {...props} promotionalPrice="R$ 15,00" />)
  expect(screen.getByText('R$ 235,00')).toHaveStyle({
    textDecoration: 'line-through'
  })
  expect(screen.getByText('R$ 15,00')).not.toHaveStyle({
    textDecoration: 'line-through'
  })
})
})