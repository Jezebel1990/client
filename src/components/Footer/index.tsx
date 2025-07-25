import Link from 'next/link'

import Heading from '@/components/Heading'
import * as S from './styles'
import Logo from '@/components/Logo'

const Footer = () => (
  <S.Wrapper>
    <Logo color="white" />

    <S.Content>
      <S.Column>
        <Heading color="white" size="small" lineBottom lineColor="secondary">
          Contact Us
        </Heading>
        <a href="mailto:sac@wongames.com">sac@wongames.com</a>
      </S.Column>

      <S.Column>
        <Heading color="white" lineColor="secondary" lineBottom size="small">
          Follow us
        </Heading>
        <nav aria-labelledby="social media">
          <a
            href="https://www.instagram.com/won-games"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com/won-games"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.youtube.com/won-games"
            target="_blank"
            rel="noopener noreferrer"
          >
            Youtube
          </a>
          <a
            href="https://www.facebook.com/won-games"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="white" lineColor="secondary" lineBottom size="small">
          Links
        </Heading>
        <nav aria-labelledby="footer resources">
          <Link href="/" passHref>
            <a>Home</a>
          </Link>
          <Link href="/games" passHref>
            <a>Store</a>
          </Link>
          <Link href="/search" passHref>
            <a>Buscar</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="footer-contact">
        <Heading color="white" lineColor="secondary" lineBottom size="small">
          Location
        </Heading>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem Ipsum</span>
        <span>Lorem, ipsum dolor.</span>
      </S.Column>
    </S.Content>

    <S.Copyright>Won Games 2025 © All rights reserved.</S.Copyright>
  </S.Wrapper>
)

export default Footer