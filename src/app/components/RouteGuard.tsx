import React from 'react';

interface AppWrapperProps {
  isLoggedIn: boolean;
}

const Route: React.FC<AppWrapperProps> = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Redirect to="/login" />;
  }

  return <>{children}</>;
};

export default AppWrapper;
