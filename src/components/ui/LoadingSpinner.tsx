import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center p-8">
      <div className="w-16 h-16 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
