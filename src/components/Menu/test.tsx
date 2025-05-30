import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from '@/utils/tests/helpers'
import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    const openMenuIcons = screen.getAllByLabelText(/open menu/i)
    expect(openMenuIcons[0]).toBeInTheDocument()

    const wonGamesLogo = screen.getByRole('img', { name: /won games/i })
    expect(wonGamesLogo).toBeInTheDocument()

    const searchIcons = screen.getAllByLabelText(/search/i)
    expect(searchIcons[0]).toBeInTheDocument()

    expect(screen.getAllByLabelText(/shopping cart/i)).toHaveLength(2)
  })

  it('should handle the open/close mobile menu', () => {
    renderWithTheme(<Menu />)

    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it('should show register box when logged out', () => {
    renderWithTheme(<Menu />)

    expect(screen.queryByText(/my profile/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/wishlist/i)).not.toBeInTheDocument()
    expect(screen.getByText(/sign up/i)).toBeInTheDocument()
    expect(screen.getAllByText(/sign in/i)).not.toHaveLength(0)
  })

  it('should show wishlist and account when logged in', () => {
    renderWithTheme(<Menu username="bell" />)

    expect(screen.getAllByText(/my profile/i)).toHaveLength(2)
    expect(screen.getAllByText(/wishlist/i)).toHaveLength(2)
    expect(screen.queryByText(/sign in/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument()
  })
})
