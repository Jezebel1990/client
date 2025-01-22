import styled, { css } from 'styled-components';
import { lighten, darken } from 'polished'
import * as TextFieldStyles from 'components/TextField/styles'
import * as ButtonStyles from 'components/Button/styles'


export const ForgotPassword = styled.a`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    text-decoration: none;
    text-align: right;
    
    &:hover {
      color: ${lighten(0.2, theme.colors.black)};
    }
  `}
`