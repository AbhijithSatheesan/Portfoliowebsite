import React from 'react';

const Button = ({ href, children, isActive, isNavLink }) => {
  const className = `flex whitespace-nowrap items-center h-8 px-3 md:px-5 font-medium rounded-lg outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-inset ${
    isActive
      ? 'text-yellow-600 shadow bg-white dark:text-white dark:bg-yellow-600'
      : 'hover:text-gray-800 focus:text-yellow-600 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-400'
  }`;

  if (isNavLink) {
    return (
      <button className={className}>
        {children}
      </button>
    );
  }

  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default Button;