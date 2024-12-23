import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Banner from '.'

const props = {
  img: 'https://o2filmes.com/wp-content/uploads/2021/01/IMAGEM-1-1042x580.jpg',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('should render correctly', () => {

    const { container } = renderWithTheme(<Banner {...props} />)
    expect(
      screen.getByRole('heading', { name: /Defy death/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Play the new CrashLands season/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /Defy death/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a Ribbon', () => {
    renderWithTheme(
    <Banner
     {...props}
     ribbon="My Ribbon"
     ribbonSize="small"
     ribbonColor="secondary"
      />
    )
    const ribbon = screen.getByText(/My Ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ 'background-color': '#9747FF'}
    )
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  });
})