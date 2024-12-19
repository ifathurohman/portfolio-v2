import { GithubIcon, Menu } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import TokenInput from './TokenInput';
import React from 'react';

interface HeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
  repoName: string;
}

const Header: React.FC<HeaderProps> = ({ isSidebarOpen, setIsSidebarOpen, repoName }) => {

  return (
    <header className="bg-light-bg2 dark:bg-dark-bg2 border-b border-gray-500 dark:border-gray-700 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-1 hover:bg-gray-400 dark:hover:bg-gray-700 rounded-md lg:hidden"
          >
            <Menu size={24} className="text-gray-300 dark:text-gray-300" />
          </button>
          <div className="flex items-center">
            <GithubIcon className="mr-2 text-light-text dark:text-gray-300" />
            <h1 className="text-xl font-semibold text-light-text dark:text-white">
              GitHub Code Browser
            </h1>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <TokenInput />
          <div className="text-sm text-light-text dark:text-gray-300 hidden sm:block">
            ifathurohman/{repoName}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;