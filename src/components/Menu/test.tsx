import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import Menu from '.';

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    const openMenuIcons = screen.getAllByLabelText(/open menu/i);
    expect(openMenuIcons[0]).toBeInTheDocument();

    const wonGamesLogo = screen.getByRole('img', { name: /won games/i });
    expect(wonGamesLogo).toBeInTheDocument();

    const searchIcons = screen.getAllByLabelText(/search/i);
    expect(searchIcons[0]).toBeInTheDocument();

    const shoppingCartIcons = screen.getAllByLabelText(/open shopping cart/i);
    expect(shoppingCartIcons[0]).toBeInTheDocument();
  });

  it('should handle the open/close mobile menu', ()=> {
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
})