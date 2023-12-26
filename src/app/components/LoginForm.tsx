'use client';
import React, { useState } from 'react';

interface LoginFormProps {
  handleSubmit: (username: string, password: string) => void;
  submitButtonText: string;
  isPasswordConfirmation?: boolean; // Add isPasswordConfirmation prop
}

const LoginForm: React.FC<LoginFormProps> = ({ handleSubmit, submitButtonText, isPasswordConfirmation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState(''); // Add passwordConfirmation state

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirmation(event.target.value);
  };

  return (
    <form onSubmit={() => handleSubmit(username, password)} className="flex flex-col space-y-4">
      <div>
        <label htmlFor="username" className="text-gray-700 mr-2">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="password" className="text-gray-700 mr-2">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {isPasswordConfirmation && ( // Show password confirmation if isPasswordConfirmation prop is true
        <div>
          <label htmlFor="passwordConfirmation" className="text-gray-700 mr-2">Confirm Password:</label>
          <input
            type="password"
            id="passwordConfirmation"
            value={passwordConfirmation}
            onChange={handlePasswordConfirmationChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        {submitButtonText}
      </button>
    </form>
  );
};

export default LoginForm;
