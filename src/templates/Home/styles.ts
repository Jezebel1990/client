import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from '@/components/Heading/styles'
import * as HighlightStyles from '@/components/Highlight/styles'

export const SectionBanner = styled.section`
  ${({ theme }) => css`
    margin: 0 calc(-${theme.grid.gutter} / 2) ${theme.spacings.large};
    ${media.greaterThan('medium')`
       margin-bottom: ${theme.spacings.large};
      position: relative;
      z-index: ${theme.layers.base};
    `}
  `}
`

export const SectionNews = styled.div`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.xxlarge} * 2);
    ${media.greaterThan('large')`
      margin-top: -13rem;
    `}
    ${media.greaterThan('medium')`
      margin-bottom: 0;
      padding-top: 14rem;
      padding-bottom: 10rem;
      background-color: ${theme.colors.gray};
      clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 85%);
      ${HeadingStyles.Wrapper} {
        color: ${theme.colors.white};
      }
    `}
  `}
`
