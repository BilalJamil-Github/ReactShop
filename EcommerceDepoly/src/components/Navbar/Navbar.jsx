import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Header() {
  const [sideNav, setSideNav] = useState(false);

  const toggleSideNav = () => {
    setSideNav(!sideNav);
  };

  return (
    <>
      <nav>
        <h2 id="navheading">WEAVE</h2>
        <ul className="items-holder">
          <NavLink className="items" to="/">Home</NavLink>
          <NavLink className="items" to="/product">Product</NavLink>
          <NavLink className="items" to="/about">About Us</NavLink>
          <NavLink className="items" to="/cart">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              height="40px"
              width="40px"
            >
              <path d="M9 21 A1 1 0 0 1 8 22 A1 1 0 0 1 7 21 A1 1 0 0 1 9 21 z" />
              <path d="M20 21 A1 1 0 0 1 19 22 A1 1 0 0 1 18 21 A1 1 0 0 1 20 21 z" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 002 1.58h9.78a2 2 0 001.95-1.57l1.65-7.43H5.12" />
            </svg>
          </NavLink>
        </ul>
        <div className="lines" onClick={toggleSideNav}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
      </nav>

    {sideNav ? <div className={`belowNav ${sideNav ? 'open' : ''}`}>
        <NavLink className="items" onClick={toggleSideNav} to="/">Home</NavLink>
        <NavLink className="items" onClick={toggleSideNav} to="/product">Product</NavLink>
        <NavLink className="items" onClick={toggleSideNav} to="/about">About Us</NavLink>
        <NavLink className="items" onClick={toggleSideNav} to="/cart">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            height="40px"
            width="40px"
          >
            <path d="M9 21 A1 1 0 0 1 8 22 A1 1 0 0 1 7 21 A1 1 0 0 1 9 21 z" />
            <path d="M20 21 A1 1 0 0 1 19 22 A1 1 0 0 1 18 21 A1 1 0 0 1 20 21 z" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 002 1.58h9.78a2 2 0 001.95-1.57l1.65-7.43H5.12" />
          </svg>
        </NavLink>
      </div>: <></>

  }
    </>
  );
}

export default Header;
