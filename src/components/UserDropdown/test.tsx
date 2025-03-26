import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from '@/utils/tests/helpers'
import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    renderWithTheme(<UserDropdown username="Jezebel" />)
    expect(screen.getByText(/Jezebel/i)).toBeInTheDocument()
  })

  it('should render the menu', async () => {
    renderWithTheme(<UserDropdown username="Jezebel" />)

    // Abrir o menu ao clicar no nome do usuário
    userEvent.click(screen.getByText(/jezebel/i))

    // Esperar que os links apareçam na tela
    expect(await screen.findByRole('link', { name: /my profile/i })).toBeInTheDocument()
    expect(await screen.findByRole('link', { name: /wishlist/i })).toBeInTheDocument()
    expect(await screen.findByRole('link', { name: /sign out/i })).toBeInTheDocument()
  })
})
