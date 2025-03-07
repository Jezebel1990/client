import { renderWithTheme } from '@/utils/tests/helpers'
import { Divider } from '.'

describe('<Divider />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Divider />)

    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle(`
      margin: 5.6rem auto 3.2rem;
      height: 0.1rem;
      background: rgba(181,181,181,0.3);
      border: 0;
    `)
    expect(container).toMatchSnapshot()
  })
})
