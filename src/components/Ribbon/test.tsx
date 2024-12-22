import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Ribbon from '.'


describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    const { container } = renderWithTheme(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText( /Best Seller/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with the primary color', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      BackgroundColor: '#13D7E0'
    })
  })

  it('should render with the  color secondary', () => {
    renderWithTheme(<Ribbon color="secondary">Best Seller</Ribbon>)

    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      BackgroundColor: '#9747FF'
    })
  })

  it('should render with the normal size as default', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)
    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem'
    })
  })
  it('should render with the small size', () => {
    renderWithTheme(<Ribbon size="small">Best Seller</Ribbon>)
    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})