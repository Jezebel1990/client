import { renderWithTheme } from '@/utils/tests/helpers'
import { Grid } from '.'

describe('<Grid />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Grid>Children</Grid>)

    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle({ display: 'grid' })
    expect(container.firstChild).toHaveStyle({
      gridTemplateColumns: 'repeat(auto-fill,minmax(25rem,1fr))'
    })
    expect(container.firstChild).toHaveStyle({ margin: '3.2rem 0' })
    
    expect(container).toMatchSnapshot()
  })
})
