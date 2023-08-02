import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../assets/styles/header.css';
import menuItems from './utils/menuItems';
import { FaSearch, FaTimes } from "react-icons/fa";
import logoImage from '../assets/img/nytimes.png';
import logoScrollImage from '../assets/img/nyt.png';
import itemImage from '../assets/img/item.png';
import formattedDate from './utils/formattedDate';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const [ismobile, setismobile] = useState(false);
  const [text, setText] = useState('');
  
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = isMenuOpen && ismobile ? 'hidden' : 'auto';
  }, [isMenuOpen, ismobile]);


  const handleScroll = () => {
    const isHeaderScrolled = window.scrollY > 0;
    setScrolled(isHeaderScrolled);
  };

  const handleResize = () => {
    const ismobileView = window.innerWidth <= 1024;
    setismobile(ismobileView);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      if (text.trim() === 'home') {
        window.location.href = '/';
      } else {
        window.location.href = `/section/${text}`;
      }
    }
  }

  useEffect(() => {

    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const currentDate = formattedDate();

  return (
    <header className={`header ${isMenuOpen && isScrolled ? 'active' : ''} ${isScrolled ? 'scrolled' : ''} ${ismobile ? 'mobile' : ''}`}>
      <div className="header-container">
        {ismobile ? (
          <div className="header-mobile">
            <div className="header-mobile-top">
              <div className='header-mobile-top-left'>
                <div className="menu-button" onClick={toggleMenu}>
                  <div className="menu-icon"></div>
                  <div className="menu-icon"></div>
                  <div className="menu-icon"></div>
                </div>
                <div className={`menu-list menu-list-mobile ${isMenuOpen ? 'active' : ''}`}>
                  <div className="close-icon" onClick={toggleMenu}>
                    <FaTimes />
                  </div>
                  <div>
                    <form onSubmit={handleSubmit} className='search-form'>
                      <input type='text' placeholder='SEARCH' onChange={(e) => setText(e.target.value)} />
                      <button type='submit'>GO</button>
                    </form>
                    </div>
                  <ul>
                    {menuItems.map((menuItem, index) => (
                      <li key={index}>
                        <NavLink to={menuItem.url} onClick={toggleMenu}>
                          {menuItem.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className='header-mobile-top-middle'>
                <Link to="/">
                  <img src={logoImage} alt="logo" className='mobile-image-logo'/>
                </Link>
              </div>
              <div className="header-mobile-top-right">
                <img src={itemImage} alt="item" className="item-icon item-icon-small" />
              </div>
            </div>
            <hr className='hr-mobile'/>
            <div className="header-mobile-bottom">
              <div className="header-mobile-bottom-middle">
                <div className="date date-mobile">
                  {currentDate}
                </div>
              </div>
              <div className="header-mobile-bottom-right">
                <p>SUBSCRIBE FOR €0.50/WEEK</p>
              </div>
            </div>
            <hr className='hr-mobile'/>
          </div>
          ) : (
            <>
              <div className="header-top-row">
                <div className="header-top-left">
                  <div className="menu-container">
                    <div className={`menu-button ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
                      <div className="menu-icon"></div>
                      <div className="menu-icon"></div>
                      <div className="menu-icon"></div>
                    </div>
                    <nav 
                      className={`menu-list menu-list-desktop ${isMenuOpen ? "active" : ""}`}
                      onMouseLeave={() => setMenuOpen(false)}
                    >
                      <ul>
                        {menuItems.map((menuItem, index) => (
                          <li key={index}>
                            <NavLink to={menuItem.url}>{menuItem.name}</NavLink>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                  <div className="search-icon">
                    <FaSearch />
                  </div>
                </div>
                <div className="header-top-middle">
                  <p>U.S.</p>
                  <p>INTERNATIONAL</p>
                  <p>CANADA</p>
                  <p>ESPAÑOL</p>
                  <p>CHINESE</p>
                </div>
                <div className="header-top-right">
                  <button>SUBSCRIBE FOR €0.50/WEEK</button>
                  <button>LOG IN</button>
                </div>
              </div>

              <div className="header-middle-row">
                <div className="date date-desktop">
                  {currentDate}
                </div>
                <div className="logo">
                  <Link to = "/">
                    <img src={logoImage} alt="logo" />
                  </Link>
                </div>
                <div className="stocks">
                  <span>S&P 500<span>
                  </span>+2% &uarr;</span>
                </div>
              </div>
              <hr className='hr-1-desktop'/>
              {!isScrolled && (
                <div className="header-bottom-row">
                  <div className='menu-horizontal'>
                    <nav>
                      <ul>
                        {menuItems.map((menuItem, index) => (
                          <li key={index}>
                            <NavLink to={menuItem.url}>{menuItem.name}</NavLink>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
              <hr className='hr-2-desktop'/>
              <hr className='hr-3-desktop'/>
              {isScrolled && (
                <div className="header-bottom-row">
                  <div className={`menu-horizontal ${isScrolled ? 'scrolled' : ''}`}>
                    <div className='header-bottom-left'>
                      <Link to="/">
                        <img src={logoScrollImage} alt="logo" />
                      </Link>
                    </div>
                    <div className='header-bottom-middle'>
                      <div className={`menu-container-scroll ${isMenuOpen ? 'active' : ''}`}>
                        <div className={`menu-button ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
                          <div className="menu-icon"></div>
                          <div className="menu-icon"></div>
                          <div className="menu-icon"></div>
                        </div>
                        <nav 
                          className={`menu-list menu-list-desktop ${isMenuOpen ? "active" : ""}`}
                          onMouseLeave={() => setMenuOpen(false)}
                        >
                          <ul>
                            {menuItems.map((menuItem, index) => (
                              <li key={index}>
                                <NavLink to={menuItem.url}>{menuItem.name}</NavLink>
                              </li>
                            ))}
                          </ul>
                        </nav>
                      </div> 
                    </div> 
                    <div className='header-bottom-right'>
                      <nav>
                        <ul>
                          {menuItems.map((menuItem, index) => (
                            <li key={index}>
                              <NavLink to={menuItem.url}>{menuItem.name}</NavLink>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>  
              )}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

