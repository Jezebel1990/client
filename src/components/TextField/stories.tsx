import { Meta, StoryObj } from '@storybook/react'
import { Email } from '@styled-icons/material-outlined'
import TextField, { TextFieldProps } from '.'

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    name: 'email',
    icon: <Email />,
    initialValue: '',
    placeholder: 'john.cage@gmail.com',
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: 'string' },
  },
} as Meta

export const Default: StoryObj<TextFieldProps> = (args: any) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

export const withError: StoryObj<TextFieldProps> = (args: any) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)
withError.args = {
  error: 'Ops...something is wrong',
}

Default.args = {}
