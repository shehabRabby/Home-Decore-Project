import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 shadow-lg backdrop-blur-md sticky top-0 z-50">
    <div className="navbar container mx-auto">
    <div className="navbar-start">
      {/* Mobile Dropdown */}
      <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost text-purple-600 hover:text-pink-600 lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>

        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-white/80 text-gray-700 rounded-2xl mt-3 w-52 p-3 shadow-md backdrop-blur-md"
        >
          <li>
            <NavLink to="/" className="hover:text-pink-500 transition">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="hover:text-pink-500 transition">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/wishlist" className="hover:text-pink-500 transition">
              Wishlist
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Brand Name */}
      <a className="btn btn-ghost normal-case text-2xl font-bold text-purple-700 hover:text-pink-600 transition">
        Room
        <Link to="/" className="text-pink-500 ml-1">
          Décor
        </Link>
      </a>
    </div>

    {/* Desktop Menu */}
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 font-medium text-gray-700">
        <li>
          <NavLink to="/" className="hover:text-pink-500 transition">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className="hover:text-pink-500 transition">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/wishlist" className="hover:text-pink-500 transition">
            Wishlist
          </NavLink>
        </li>
      </ul>
    </div>

    {/* Right Side Button */}
    <div className="navbar-end">
      <NavLink
        to="/products"
        className="btn bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold border-none hover:scale-105 transition-transform"
      >
        Shop Visit
      </NavLink>
    </div>
      </div>
    </div>

  );
};

export default Navbar;
