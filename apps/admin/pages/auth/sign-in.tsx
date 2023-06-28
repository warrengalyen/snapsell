import { useState } from 'react';
import InputWithLabel  from '../../components/InputWithLabel';
import AuthLayout from '../../layouts/AuthLayout';
import Heading from '../../components/Heading';
import Button from '../../components/Button';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import { signIn } from 'next-auth/react';

function SignIn() {
  const [formInputs, setFormInputs] = useState({
    user_email: '',
    password_hash: '',
  });


  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    toast.promise(
      signIn('credentials', {
        ...formInputs,
        callbackUrl: `/admin/dashboard`
      }),
      {
        loading: 'Logging in...',
        success: 'Logged in!',
        error: 'Error logging in.',
      },
      {
        position: 'bottom-center',
      }
    );
  }

  return (
    <>
      <div>
        <Heading title={'Sign-In'} type={'h2'} />
        <p>
          <Link href="/auth/sign-up" className="font-bold text-indigo-600">
            Don&apos;t have an account? Create one.
          </Link>
        </p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <InputWithLabel
            label="Email"
            id="user_email"
            type="email"
            showLabel={true}
            state={formInputs}
            setState={setFormInputs}
            direction="column"
            required
            autoComplete="current-email"
          />

          <InputWithLabel
            label="Password"
            id="password_hash"
            type="password"
            showLabel={true}
            state={formInputs}
            setState={setFormInputs}
            direction="column"
            required
            autoComplete="current-password"
          />

          <Button size="default" appearance="primary" type="submit">
            Sign In
          </Button>
        </form>
      </div>
    </>
  );
}

export default function () {
  return (
    <AuthLayout title="Sign In">
      <SignIn />
    </AuthLayout>
  );
}
