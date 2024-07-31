import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar bg-blue-500 p-4">
      <ul className="flex space-x-4">
        <li><Link to="/" className="text-white hover:text-gray-400">Home</Link></li>
        <li><Link to="/about" className="text-white hover:text-gray-400">About</Link></li>
        <li><Link to="/projects" className="text-white hover:text-gray-400">Projects</Link></li>
        <li><Link to="/contact" className="text-white hover:text-gray-400">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
