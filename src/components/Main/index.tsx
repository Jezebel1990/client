
import * as S from './styles'

const Main = ({
      title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => (
    <S.Wrapper>
        <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um computador com código."
        />
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
    <S.Illustration
    src='img/developer.svg'
    alt='Uma desenvolvedora sentada com um notebook.'
    />
    </S.Wrapper>
)
export default Main