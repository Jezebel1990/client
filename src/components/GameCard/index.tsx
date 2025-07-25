import Link from 'next/link'

import { AddShoppingCart } from '@styled-icons/material-outlined'
import { StarBorder, Star } from '@styled-icons/material-rounded'
import Ribbon, { RibbonColors, RibbonSizes } from '@/components/Ribbon'
import Button from '@/components/Button'
import Image from 'next/image'
import * as S from './styles'
import formatPrice from '@/utils/format-price'

export type GameCardProps = {
  slug: string
  title: string
  developer: string
  img: string
  price: number
  promotionalPrice?: number
  favorite?: boolean
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
  onFav?: () => void
}

const GameCard = ({
  slug,
  title,
  developer,
  img,
  price,
  promotionalPrice,
  favorite = false,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small',
  onFav
}: GameCardProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}

      <Link href={`/game/${slug}`} passHref legacyBehavior>
      <S.ImageBox>
          <Image
            src={img}
            alt={title}
            layout="responsive"
            width={300}
            height={240}
          />
      </S.ImageBox>
      </Link>
   

    <S.Content>
        <Link href={`/game/${slug}`} passHref legacyBehavior>
         <S.Info>
            <S.Title>{title}</S.Title>
            <S.Developer>{developer}</S.Developer>
      </S.Info>
     </Link>
      <S.FavButton onClick={onFav} role="button">
        {favorite ? (
          <Star aria-label="Remove from Wishlist" />
        ) : (
          <StarBorder aria-label="Add to Wishlist" />
        )}
      </S.FavButton>

      <S.BuyBox>
        {!!promotionalPrice && (
          <S.Price isPromotional>{formatPrice(price)}</S.Price>
        )}
        <S.Price>
    {(promotionalPrice ?? price) === 0 ? 'FREE' : formatPrice(promotionalPrice ?? price)}
  </S.Price>
        <Button icon={<AddShoppingCart />} size="small" />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default GameCard