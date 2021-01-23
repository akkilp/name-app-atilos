import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    /* Body */
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800">
      {/* Wrapping container */}
      <div className="relative sm:max-w-3xl sm:mx-auto py-3">
        <div className="flex flex-col m-2 bg-gray-200 p-8 rounded-3xl">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
