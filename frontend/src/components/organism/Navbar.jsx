import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  FaSearch, 
  FaBars, 
  FaTimes, 
  FaUser, 
  FaSignOutAlt, 
  FaShoppingCart,
  FaHome,
  FaArchive,
  FaInfoCircle,
  FaEnvelope
} from "react-icons/fa";
import logo from '../../images/logo.jpg';
import profilepic from "../../images/profilepic.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const navMenuRef = useRef(null);

  const navLinks = [
    { label: 'HOME', path: '/', icon: FaHome },
    { label: 'COLLECTION', path: '/collection', icon: FaArchive },
    { label: 'ABOUT', path: '/about', icon: FaInfoCircle },
    { label: 'CONTACT', path: '/contact', icon: FaEnvelope }
  ];

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navMenuRef.current && !navMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsProfileDropdownOpen(false);
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsMobileMenuOpen(false);
    setIsProfileDropdownOpen(false);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Top Navigation Bar */}
      <div className="flex justify-between items-center px-4 py-3 md:px-6">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-24 w-auto object-contain"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={`
                text-sm font-medium tracking-wider
                transition-colors duration-300
                ${activeLink === link.path 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-500'}
              `}
              onClick={() => handleLinkClick(link.path)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Icons Section */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <button className="text-gray-600 hover:text-blue-600 transition-colors">
            <FaSearch className="w-5 h-5" />
          </button>

          {/* Desktop Profile Dropdown */}
          <div className="relative hidden md:block">
            <img
              src={profilepic}
              alt="Profile"
              className="w-10 h-10 rounded-full cursor-pointer hover:opacity-80"
              onClick={toggleProfileDropdown}
            />
            
            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border">
                <div className="py-1">
                  <NavLink 
                    to="/profile" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 items-center"
                  >
                    <FaUser className="mr-2" /> Profile
                  </NavLink>
                  <NavLink 
                    to="/orders" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 items-center"
                  >
                    <FaShoppingCart className="mr-2" /> Orders
                  </NavLink>
                  <NavLink 
                    to="/logout" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 items-center"
                  >
                    <FaSignOutAlt className="mr-2" /> Logout
                  </NavLink>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gray-600"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div 
            ref={navMenuRef}
            className="absolute top-0 left-0 w-full bg-white shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <div className="flex items-center space-x-3">
                <img
                  src={profilepic}
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h2 className="text-lg font-semibold">User Profile</h2>
                  <p className="text-sm text-gray-500">Welcome back</p>
                </div>
              </div>
              <button 
                className="text-gray-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaTimes className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="py-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={`
                    flex items-center px-4 py-3
                    text-base font-medium 
                    ${activeLink === link.path 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-700 hover:bg-gray-100'}
                  `}
                  onClick={() => handleLinkClick(link.path)}
                >
                  <link.icon className="mr-3 w-5 h-5" />
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Mobile Profile Options */}
            <div className="border-t py-2">
              <NavLink 
                to="/profile" 
                className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100"
                onClick={handleLinkClick}
              >
                <FaUser className="mr-3 w-5 h-5" /> Profile
              </NavLink>
              <NavLink 
                to="/orders" 
                className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100"
                onClick={handleLinkClick}
              >
                <FaShoppingCart className="mr-3 w-5 h-5" /> Orders
              </NavLink>
              <NavLink 
                to="/logout" 
                className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100"
                onClick={handleLinkClick}
              >
                <FaSignOutAlt className="mr-3 w-5 h-5" /> Logout
              </NavLink>
            </div>
          </div>
        </div>
      )}

      {/* Spacer to prevent content from being hidden behind navbar */}
      <div className="h-16 md:h-20"></div>
    </nav>
  );
};

export default Navbar;