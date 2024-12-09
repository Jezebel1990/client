import {  screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-styled-components'
import Heading from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Heading />', () => {
  it('should render a white label by default', () => {
   renderWithTheme(<Heading>Won Games</Heading>);
   const heading = screen.getByRole('heading', { name: /won games/i });
   expect(heading).toBeInTheDocument();
   expect(heading).toHaveStyle({ color: '#FAFAFA' });
    })
  })

  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading color='black'>Won Games</Heading>);
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
       color: '#030517'
    })
 })

 it('should render a heading with a line to the left side', () => {
  renderWithTheme(<Heading lineLeft>Won Games</Heading>);
  expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
     'border-left': '0.7rem solid #9747FF'
  })
})

it('should render a heading with a line at the bottom', () => {
  renderWithTheme(<Heading lineBottom>Won Games</Heading>)
  expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
    'border-bottom',
    '0.5rem solid #13D7E0',
    {
      modifier: '::after'
    }
  )
})


  