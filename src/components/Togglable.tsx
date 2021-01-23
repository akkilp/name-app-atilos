import React from 'react';

interface TogglableProps {
  show: boolean;
  children: React.ReactNode;
}

const Togglable: React.FC<TogglableProps> = ({ children, show }) => {
  if (!show) return null;

  return <div className='absolute w-full'>{children}</div>;
};

export default Togglable;
