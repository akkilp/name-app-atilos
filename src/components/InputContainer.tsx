import React from 'react';

interface TopContainerProps {
  children: React.ReactNode;
}

const TopContainer: React.FC<TopContainerProps> = ({ children }) => {
  return (
    <>
      <div className='flex flex-col flex-grow space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0'>{children}</div>
      <div className='flex flex-grow border border-white my-8' />
    </>
  );
};

export default TopContainer;
