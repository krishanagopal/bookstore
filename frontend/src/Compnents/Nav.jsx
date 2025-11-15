import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import { useAuth } from "../Context/Authprovider.jsx";
import Logout from "./Logout.jsx";

function Nav() {
  const [stickyNav, setStickyNav] = useState(false);

  // 🔹 Get logged-in user from Context
  const [authUser, setAuthUser] = useAuth();

  useEffect(() => {
    const handleScroll = () => setStickyNav(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      data-theme="light"
      className={`navbar bg-base-100 shadow-sm px-5 md:wd-full ${
        stickyNav
          ? "fixed top-0 left-0 right-0 z-50 shadow-md bg-base-200 duration-300 transition-all ease-in-out"
          : ""
      }`}
    >
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </label>

          {/* Mobile Menu */}
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/course">Course</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/about">About</Link></li>

            {/* Mobile Search */}
            <li className="mt-2">
              <div className="join w-full">
                <input
                  type="text"
                  placeholder="Search book..."
                  className="input input-bordered join-item w-full focus:outline-none focus:ring-1 focus:ring-neutral"
                />
                <button className="btn btn-neutral join-item">Search</button>
              </div>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className="btn btn-ghost text-xl ml-2 font-bold tracking-wide"
        >
          BOOKSTORE
        </Link>
      </div>

      {/* Navbar Center (Desktop Menu) */}
      <div className="navbar-center hidden lg:flex justify-center grow">
        <ul className="menu menu-horizontal px-1 items-center space-x-6">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/course">Course</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/about">About</Link></li>

          {/* Desktop Search */}
          <li>
            <div className="join">
              <input
                type="text"
                placeholder="Search book..."
                className="input input-bordered join-item focus:outline-none focus:ring-1 focus:ring-neutral"
              />
              <button className="btn btn-neutral join-item">Search</button>
            </div>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center gap-4">
        {/* Theme Toggle */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            className="toggle theme-controller"
            value="dark"
          />
          <span className="text-sm hidden sm:inline">Dark Mode</span>
        </label>

        {/* 🔹 CONDITIONAL: Show Logout OR Login button */}
        {authUser ? (
          <Logout />
        ) : (
          <>
            {/* Log In Button */}
            <button
              className="btn btn-neutral rounded-lg font-semibold"
              onClick={() =>
                document.getElementById("my_modal_3").showModal()
              }
            >
              Log In
            </button>

            {/* Login Modal */}
            <Login />
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;


