import { Meta } from '@storybook/react'
import Logo from '.'

export default {
  title: 'Logo',
  component: Logo
} as Meta

export function Default(args: any) {
  return <Logo {...args} />
}