import TextField from '@/components/TextField'
import Link from 'next/link'
import { Email, Lock } from 'styled-icons/material-outlined'
import Button from '@/components/Button'
import * as S from './styles'
import { FormWrapper, FormLink } from '@/components/Form'

const FormSignIn = () => (
  <FormWrapper>
    <form>
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />

      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />

      <Link href="#">
        <S.ForgotPassword as="a">Forgot your password?</S.ForgotPassword>
      </Link>

      <Button size="large" fullWidth>
        Sign in now
      </Button>
      <FormLink>
        Don’t have an account?{' '}
        <Link href="/sign-up">Sign up</Link>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignIn
