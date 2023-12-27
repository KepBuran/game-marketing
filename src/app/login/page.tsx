'use client';
import React, { useMemo, useState } from 'react';
import LoginForm from '../components/LoginForm';
import { redirect, useRouter } from 'next/navigation';
import Link from 'next/link';
import { UsersService } from '../services/UsersService';

const LoginPage: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const usersService = useMemo(() => UsersService.getInstance(), []);

  const { push } = useRouter();

  const handleLogin = async (username: string, password: string) => {
    if (!username) {
      setError('Username is required');
      return;
    }

    if (!password) {
      setError('Password is required');
      return;
    }

    const {success, error} = await usersService.login(username, password)
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
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <LoginForm handleSubmit={handleLogin} submitButtonText="Login" />
      <Link href="/signIn"><p className="text-blue-500 text-sm mt-2 cursor-pointer">Don&apos;t have an account? Sign in!</p></Link>
    </div>
  );
};

export default LoginPage;
