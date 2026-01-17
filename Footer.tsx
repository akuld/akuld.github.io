
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-blue-900/30 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-500 text-xs tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Mechanical & Robotics Engineering Portfolio
        </p>
      </div>
    </footer>
  );
};

export default Footer;
