import React from 'react';
import Link from 'next/link';
import { Film } from 'lucide-react';
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher'; // Import the switcher

const Navbar = () => {
  return (
    <header className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white shadow-md transition-colors duration-300">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center space-x-2 text-xl font-bold">
          <Film className="h-7 w-7 text-blue-500 dark:text-blue-400" />
          <span>ShowScout</span>
        </Link>
        <ThemeSwitcher /> {/* Add the switcher here */}
      </div>
    </header>
  );
};

export default Navbar;
