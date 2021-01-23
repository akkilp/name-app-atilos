import React from 'react';

interface ErrorProps {
  error: any;
}

const Error: React.FC<ErrorProps> = ({ error }) => {
  const message = error.response.data.message || `${error.response.status}: ${error.response.statusText}`;
  return (
    <div>
      <h4 className='text-red-900 text-2xl pb-4'>Error occurred</h4>
      <p className='text-gray-800 text-md'>{message}</p>
    </div>
  );
};

export default Error;
