'use client'

import { 
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent 
  } from 'styled-components';

type GlobalStylesProps = {
  removeBg?: boolean
}

const GlobalStyles: GlobalStyleComponent<
GlobalStylesProps,
DefaultTheme
> = createGlobalStyle`
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url('/fonts/poppins-v21-latin-300.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Poppins';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url('/fonts/poppins-v21-latin-regular.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
    font-display: swap;
  src: url('/fonts/poppins-v21-latin-600.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  &::before,
  &::after {
    box-sizing: inherit;
  }

  ${({ theme, removeBg }) => css`
    html {
      font-size: 62.5%; // 1rem = 10px == 10/16px = 62.5% (1.4rem = 14px)
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};

      ${!removeBg &&
      css`
      background-color: ${theme.colors.mainBg};
  `}
  }
`}
`

export default GlobalStyles
