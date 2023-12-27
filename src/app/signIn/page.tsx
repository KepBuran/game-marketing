'use client';
import React, { useMemo, useState } from 'react';
import LoginForm from '../components/LoginForm';
import { UsersService } from '../services/UsersService';
import { useRouter } from 'next/navigation';

const SignInPage: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const usersService = useMemo(() => UsersService.getInstance(), []);

  const { push } = useRouter();

  const handleSignIn = async (username: string, password: string, passwordConfirmation?: string) => {
    if (password !== passwordConfirmation) {
      setError('Passwords do not match');
      return;
    }
     
    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    if (username.length < 4) {
      setError('Username must be at least 4 characters long');
      return;
    }

    const {success, error} = await usersService.signIn(username, password)
    if (success) {
      push('/');
      return;
    }
    if (error) {
      setError(error);
      return;
    }
    setError('Something went wrong. Please try again later');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Sign in</h1>
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <LoginForm handleSubmit={handleSignIn} submitButtonText="Sign in" isPasswordConfirmation={true}/>
    </div>
  );
};

export default SignInPage;
