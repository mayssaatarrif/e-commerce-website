import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  FaSearch, FaBars, FaTimes, FaUser, FaSignOutAlt,
  FaShoppingCart, FaHome, FaArchive, FaInfoCircle, FaEnvelope
} from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import logo from '../../images/logo.jpg';
import profilepic from "../../images/profilepic.png";
import { ShopContext } from '../../context/ShopContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const navMenuRef = useRef(null);
  const {setShowSearch} = useContext(ShopContext)

  const navLinks = [
    { label: 'HOME', path: '/', icon: FaHome },
    { label: 'COLLECTION', path: '/collection', icon: FaArchive },
    { label: 'ABOUT', path: '/about', icon: FaInfoCircle },
    { label: 'CONTACT', path: '/contact', icon: FaEnvelope }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navMenuRef.current && !navMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
      <div className="flex justify-between items-center px-4 py-3 md:px-6">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-24 w-auto object-contain" />
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wider transition-colors duration-300 ${activeLink === link.path ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'}`}
              onClick={() => handleLinkClick(link.path)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Icons Section */}
        <div className="flex items-center space-x-6">
          {/* Search Icon */}
          <button className="text-gray-600 hover:text-blue-600 transition-colors">
            <FaSearch className="w-5 h-5" onClick={()=>setShowSearch(true)} />
          </button>

          {/* Cart Icon with Counter */}
          <Link to="/cart" className="relative text-gray-600 hover:text-blue-600">
            <CiShoppingCart className="w-8 h-8" />
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 
              bg-black text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center 
              rounded-full">
              2
            </span>
          </Link>

          {/* Profile Dropdown */}
          <div className="relative hidden md:flex items-center">
            <img
              src={profilepic}
              alt="Profile"
              className="w-8 h-8 rounded-full cursor-pointer hover:opacity-80"
              onClick={toggleProfileDropdown}
            />
            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-40 w-48 bg-white rounded-lg shadow-lg border">
                <div className="py-1">
                  <NavLink to="/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    <FaUser className="mr-2" /> Profile
                  </NavLink>
                  <NavLink to="/orders" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    <FaShoppingCart className="mr-2" /> Orders
                  </NavLink>
                  <NavLink to="/logout" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    <FaSignOutAlt className="mr-2" /> Logout
                  </NavLink>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg border md:hidden z-10">
          <div className="flex flex-col space-y-2 py-4" ref={navMenuRef}>
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="block px-6 py-3 text-gray-700 text-sm font-medium hover:bg-gray-100"
                onClick={() => handleLinkClick(link.path)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
