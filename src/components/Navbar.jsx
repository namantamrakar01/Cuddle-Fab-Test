import React, { useState } from "react";
import "../Css/navbar.css";
import Logo from "./Logo";
import LoginButton from "./LoginButton";
import Login from "./Login";

function Navbar() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);

  const handleSearchClick = () => {
    setSearchVisible((prev) => !prev);
  };

  const handleLoginClick = () => {
    setLoginVisible((prev) => !prev);
  };

  const handleCloseLogin = () => {
    setLoginVisible(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
        <div className="container-fluid d-flex justify-content-end align-items-center">
          <div className="navbar-brand align-items-center justify-content-center">
            <div className="d-flex justify-content-center">
              <Logo />
            </div>
            <h1 className="brand-name">Cuddle Fab</h1>
          </div>

          <div className="d-flex align-items-center justify-content-between my-navbar-right">
            {/* Search bar and icon */}
            <div className="search-area d-flex align-items-center">
              <div className="search-wrapper">
                <input
                  type="text"
                  placeholder="Search..."
                  className={`search-bar ${searchVisible ? 'show' : ''}`}
                />
                <div className="search-icon" onClick={handleSearchClick}>
                  <img
                    src="\src\assets\search-interface-symbol.png"
                    alt="search-icon"
                    className="search-icon-icon"
                  />
                </div>
              </div>
            </div>

            <div className="cart-icon">
              <img
                src="\src\assets\shopping-bag.png"
                alt="cart-icon"
                className="cart-icon-icon"
              />
            </div>
            <div>
              <LoginButton onClick={handleLoginClick} />
            </div>
          </div>
        </div>
      </nav>
      <Login visible={loginVisible} onClose={handleCloseLogin} />
    </>
  );
}

export default Navbar;