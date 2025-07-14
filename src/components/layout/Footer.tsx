import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-500 dark:text-gray-400 py-4 mt-auto transition-colors duration-300">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} ShowScout. All Rights Reserved.</p>
        <p className="text-sm mt-1">
          Powered by{' '}
          <a
            href="https://www.tvmaze.com/api"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            TVmaze API
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
