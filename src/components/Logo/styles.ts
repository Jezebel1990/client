import styled, { css } from 'styled-components'
import { LogoProps } from '.'

const colors = {
  white: '#FAFAFA',
  black: '#030517'
}

const sizes = {
  normal: css`
    width: 11rem;
    height: 3.3rem;
  `,
  large: css`
    width: 20rem;
    height: 5.9rem;
  `
}

export const Wrapper = styled.main<LogoProps>`
  ${({ color, size }) => css`
    color: ${color && colors[color] ? colors[color] : 'inherit'};
    ${size && sizes[size]};
  `}
`
