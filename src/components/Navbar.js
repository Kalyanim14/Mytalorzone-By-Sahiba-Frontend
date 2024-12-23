import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand-name">
      <h2>Mytalorzone</h2>
      </div>
      <ul className="navbar-menu">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/product-list" className={({ isActive }) => (isActive ? 'active' : '')}>
            Product List
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className={({ isActive }) => (isActive ? 'active' : '')}>
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : '')}>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" className={({ isActive }) => (isActive ? 'active' : '')}>
            Signup
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
