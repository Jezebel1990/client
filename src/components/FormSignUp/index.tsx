import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'
import * as S from './styles';
import TextField from 'components/TextField';
import Button from 'components/Button';
import Link from 'next/link';

 const FormSignUp = () => (
<S.Wrapper>
 <form>
  <TextField
     name="name"
     placeholder="Name"
     type="name"
     icon={<AccountCircle />}
  />
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
<TextField
        name="confirm-password"
        placeholder="Confirm password"
        type="password"
        icon={<Lock />}
      />
  
 <Button size="large" fullWidth>
        Sign up now
</Button> 

<S.FormLink>
        Already have an account?{' '}
        <Link href="/sign-in" legacyBehavior>
          <a>Sign in</a>
        </Link>
</S.FormLink>
 </form>
</S.Wrapper>
)

export default FormSignUp;