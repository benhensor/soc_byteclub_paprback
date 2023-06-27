import { Link } from 'react-router-dom';
import logo from '../../assets/icons/paprback_logo.svg';
import './header.css';
import React, { useState, useEffect } from 'react';
import userIconGrey from '../../assets/icons/userIconGrey.png';
import gHeart from '../../assets/icons/gHeart.png';
import LoginButton from '../loginButton/loginButton';
import LogoutButton from '../logoutButton/logoutButton';

function Header() {
  // toggle hide show login/logout button depending on if user is logged in
  const [menuOpen, setMenuOpen] = useState(false);

  // useEffect to handle resizing and closing the menu on smaller screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Function to toggle the menu
  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header id="header">
      <div className="header-container">
        <div className="header-top">
          <div className="logo-container">
            {/* Render the logo and link it to the homepage */}
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="user-access">
            {/* Render signup and login buttons and link them to their respective pages */}
            <Link to="https://dev-4lkat7o8wi7ta0m4.us.auth0.com/u/signup?state=hKFo2SAxdFB6ZHQwamhJdmgyOXB3a3Y0RGRjZzRldVI0MnFreqFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIEo2SU1TM1d2TDF1amktVEhNVXE5OENwR0tfWXFGUmhVo2NpZNkgNENXNlRRSEYxQVlnUGlDem9GTmY2d3V2aVlPUDRMVTg">
              <button className="signup">Sign up</button>
            </Link>
            <LoginButton id="header-login" />
            <LogoutButton id="header-logout" />
          </div>
        </div>
        <div className="menuBar">
          <div className="header-bottom">
            <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
              {/* Render user icon and link it to the login page */}
              <Link to="/favs">
                <img className="favs" src={gHeart} alt="favs" />
              </Link>

              <Link to="https://dev-4lkat7o8wi7ta0m4.us.auth0.com/u/login?state=hKFo2SB5ZU1BMlVfNW1VcXB5YWJpeEt4VVFhMkdUX0xfTXZPR6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIGRCRDlhWWdDYWRYeDc1ZXlidUZPRlNrMC0yU09XNVdlo2NpZNkgNENXNlRRSEYxQVlnUGlDem9GTmY2d3V2aVlPUDRMVTg">
                <img
                  className="userIcon"
                  src={userIconGrey}
                  alt="User"
                />
              </Link>

              <div className="menu-toggle" onClick={handleToggleMenu}>
                {/* Render the menu toggle button */}
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
              <ul className={`menu ${menuOpen ? 'open' : ''}`}>
                {/* Render navigation buttons and link them to their respective pages */}
                <li>
                  <Link to="/browse">
                    <button id="navbutton" className="browse">
                      Browse
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <button id="navbutton" className="about">
                      About
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/faq">
                    <button id="navbutton" className="faq">
                      FAQ
                    </button>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
