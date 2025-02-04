import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import GameInfo from '.'

const props = {
  title: 'My Game Title',
  description: 'Game Description',
  price: '210,00',
}

describe('<GameInfo />', () => {
  it('should render game informations', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />)

    screen.debug() 

    expect(
      screen.getByRole('heading', { name: /my game title/i })
    ).toBeInTheDocument()
    
    expect(screen.getByText(/210,00/)).toBeInTheDocument()
    expect(screen.getByText(/game description/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
