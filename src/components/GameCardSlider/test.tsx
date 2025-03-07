import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/utils/tests/helpers'
import GameCardSlider from '.'

const items = [
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://i.imgur.com/Wbk7IgR.png',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00',
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://i.imgur.com/n49XB78.png',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00',
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://i.imgur.com/Ug0HjRo.png',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00',
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://i.imgur.com/7ova9KM.png',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00',
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://i.imgur.com/q1E3NnO.png',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00',
  },
]

describe('<GameCardSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if color passed', () => {
    renderWithTheme(<GameCardSlider items={items} color="white" />)
    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#FAFAFA',
    })
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#FAFAFA',
    })
  })
})
