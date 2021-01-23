import React from "react";

interface NotFoundProps {
  invalidUrl?: boolean;
}

const NotFound: React.FC<NotFoundProps> = ({ invalidUrl }) => {
  if (invalidUrl) {
    return (
      <div>
        <h4 className="text-red-900 text-2xl pb-4">404</h4>
        <p className="text-gray-800 text-lg">Invalid url</p>
      </div>
    );
  }

  return <p>Item you tried to find does not exists.</p>;
};

export default NotFound;
