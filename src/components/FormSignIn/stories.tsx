import { Meta, StoryObj } from '@storybook/react'
import FormSignIn from '.'

export default {
  title: 'Form/FormSignIn',
  component: FormSignIn,
} as Meta

export const Default: StoryObj = () => (
  <div style={{ width: 300, margin: 'auto' }}>
    <FormSignIn />
  </div>
)

Default.args = {}
