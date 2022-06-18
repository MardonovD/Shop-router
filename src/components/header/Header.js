import React from "react";
import { Link, BrowserRouter } from "react-router-dom";

import "./HeaderStyle.css";
const Header = () => {
  return (
    <div className="header ">
      <BrowserRouter>
        <div className="container-fluid">
          <div className="logo">
            <span>
              <Link to="/" style={{ color: "white", fontWeight: 600 }}>
                DosTon
              </Link>
            </span>
          </div>
          <div className="nav">
            <ul className="nav-ul">
              <li>
                <Link style={{ color: "white", fontWeight: 600 }} to="home">
                  Home
                </Link>
              </li>
              <li>
                <Link style={{ color: "white", fontWeight: 600 }} to="about">
                  About
                </Link>
              </li>
              <li>
                <Link
                  style={{ color: "white", fontWeight: 600 }}
                  to="card"
                  className="card-item"
                >
                  Card :<span> 0</span>
                </Link>
              </li>
              <Link style={{ color: "white", fontWeight: 600 }} to="login">
                Log In
              </Link>
            </ul>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Header;
