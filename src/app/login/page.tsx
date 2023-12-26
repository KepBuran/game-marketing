'use client';
import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import { redirect } from 'next/navigation';
import Link from 'next/link';

const LoginPage: React.FC = () => {
  const [error, setError] = useState<string | null>(null);

  const handleLogin = (username: string, password: string) => {
    if (!username) {
      setError('Username is required');
      return;
    }

    if (!password) {
      setError('Password is required');
      return;
    }

    // Handle login logic here
    setError('Invalid username or password');
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
