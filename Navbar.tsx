
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-blue-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold tracking-tighter text-white hover:text-blue-400 transition-colors">
              ENGINEER<span className="text-blue-500">.</span>PORTFOLIO
            </Link>
          </div>
          <div className="flex space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
            >
              HOME
            </Link>
            <Link 
              to="/portfolio" 
              className={`text-sm font-medium transition-colors ${isActive('/portfolio') ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
            >
              PORTFOLIO
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
