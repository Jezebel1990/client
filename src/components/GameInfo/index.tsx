import { AddShoppingCart } from '@styled-icons/material-outlined'
import { StarBorder } from '@styled-icons/material-rounded'
import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Ribbon from '@/components/Ribbon'
import formatPrice from '@/utils/format-price'
import * as S from './styles'

export type GameInfoProps = {
  title: string
  description: string
  price: number
}
const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading color="black" lineBottom>
      {title}
    </Heading>
    <Ribbon color="primary">{formatPrice(price)}</Ribbon>
    <S.Description>{description}</S.Description>
    <S.ButtonsWrapper>
      <Button icon={<AddShoppingCart />} size="large">
        Add to cart
      </Button>
      <Button icon={<StarBorder />} size="large" minimal>
        Wishlist
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)
export default GameInfo
