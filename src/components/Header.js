import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Careers', path: '/careers' }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-14">
            <Link
              to="/"
              className="flex items-center cursor-pointer group"
            >
              <div className="w-20 h-20 sm:w-40 sm:h-8 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <img
                  src="/logo.svg"
                  alt="Salsha Technologies Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
            <nav className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-6 py-2 rounded-full text-lg transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-teal-600 font-bold'
                      : 'text-gray-700 hover:text-teal-600 font-normal'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="ml-4 px-6 py-2 bg-gradient-to-r from-teal-600 to-orange-500 text-white font-semibold text-lg rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Get Started
              </Link>
            </nav>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-3 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-600 hover:scale-105 transition-all duration-200"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-4 space-y-3 border-t border-gray-100">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center w-full px-4 py-3 rounded-xl text-lg transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'text-teal-600 font-bold'
                      : 'text-gray-700 hover:text-teal-600 font-normal'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full mr-3 ${
                    location.pathname === item.path ? 'bg-teal-600' : 'bg-gray-400'
                  }`} />
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full mt-4 py-3 bg-gradient-to-r from-teal-600 to-orange-500 text-white font-semibold text-lg rounded-xl hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 block text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
