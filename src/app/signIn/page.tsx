'use client';
import React, { useMemo, useState } from 'react';
import LoginForm from '../components/LoginForm';
import { GamesService } from '../services/GamesService';

const SignInPage: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const usersService = useMemo(() => new GamesService(), []);

  const handleSignIn = (username, password) => {
    // Perform your sign-in logic here
    // For example, make an API call to authenticate the user

    // If there's an error, set the error state
    setError('Invalid username or password');

    // If sign-in is successful, redirect the user to the dashboard or another page
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
