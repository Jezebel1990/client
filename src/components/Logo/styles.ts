import styled, { css } from 'styled-components'
import { LogoProps } from '.'
import media from 'styled-media-query'

const colors = {
  white: '#FAFAFA',
  black: '#030517',
}

const sizes = {
  normal: css`
    width: 11rem;
    height: 3.3rem;
  `,
  large: css`
    width: 20rem;
    height: 5.9rem;
  `,
}

const wrapperModifiers = {
  hideOnMobile: css`
    .text {
      display: none;
    }
  `,
}

export const Wrapper = styled.main.withConfig({
  shouldForwardProp: (prop) => prop !== 'hideOnMobile',
})<LogoProps>`
  ${({ color = 'white', size, hideOnMobile }) => css`
    color: ${color && colors[color] ? colors[color] : 'inherit'};
    ${size && sizes[size]};
    ${hideOnMobile && wrapperModifiers.hideOnMobile};

    display: flex;
    align-items: center;

    ${media.lessThan('medium')`
      width: 5.8rem;
      height: 4.5rem;

      svg {
        height: 4.5rem;
        pointer-events: none;
      }
    `}
  `}
`
