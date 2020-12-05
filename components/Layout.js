import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center bg-niceGray">
      <div className="w-full px-2 sm:w-935">{children}</div>
    </div>
  );
};

export default Layout;
