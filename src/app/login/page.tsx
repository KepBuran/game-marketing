'use client'; 
import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage: React.FC = () => {
  const [error, setError] = useState<string | null>(null);

  const handleLogin = (username: string, password: string) => {
    // Handle login logic here
    setError('Invalid username or password');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <LoginForm handleSubmit={handleLogin} submitButtonText="Login" />
    </div>
  );
};

export default LoginPage;
