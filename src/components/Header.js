import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../assets/styles/header.css';
import menuItems from './utils/menuItems';
import { FaSearch, FaTimes } from "react-icons/fa";
import logoImage from '../assets/img/nytimes.png';
import logoScrollImage from '../assets/img/nyt.png';
import itemImage from '../assets/img/item.png';
import { FormattedDate, IntlProvider } from 'react-intl';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const [isDesktop, setisDesktop] = useState(false);
  const [text, setText] = useState('');
  
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = isMenuOpen && isDesktop ? 'hidden' : 'auto';
  }, [isMenuOpen, isDesktop]);


  const handleScroll = () => {
    const isHeaderScrolled = window.scrollY > 0;
    setScrolled(isHeaderScrolled);
  };

  const handleResize = () => {
    const isDesktopView = window.innerWidth <= 1024;
    setisDesktop(isDesktopView);
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

  const locale = 'en';
  const currentDate = new Date();

  return (
    <IntlProvider locale={locale}>
      <header className={`header ${isMenuOpen && isScrolled ? 'active' : ''} ${isScrolled ? 'scrolled' : ''} ${isDesktop ? 'desktop' : ''}`}>
        <div className="header-container">
          {isDesktop ? (
            <div className="header-desktop">
              <div className="header-desktop-top">
                <div className='header-desktop-top-left'>
                  <div className="menu-button" onClick={toggleMenu}>
                    <div className="menu-icon"></div>
                    <div className="menu-icon"></div>
                    <div className="menu-icon"></div>
                  </div>
                  <div className={`menu-list menu-list-desktop ${isMenuOpen ? 'active' : ''}`}>
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
                <div className='header-desktop-top-middle'>
                  <Link to="/">
                    <img src={logoImage} alt="logo" className='desktop-image-logo'/>
                  </Link>
                </div>
                <div className="header-desktop-top-right">
                  <img src={itemImage} alt="item" className="item-icon item-icon-small" />
                </div>
              </div>
              <hr className='hr-desktop'/>
              <div className="header-desktop-bottom">
                <div className="header-desktop-bottom-middle">
                  <div className="date date-desktop">
                    <FormattedDate value={currentDate} weekday='long' month='long' day='numeric' year='numeric'/>
                  </div>
                </div>
                <div className="header-desktop-bottom-right">
                  <p>SUBSCRIBE FOR €0.50/WEEK</p>
                </div>
              </div>
              <hr className='hr-desktop'/>
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
                        className={`menu-list menu-list-large-screen ${isMenuOpen ? "active" : ""}`}
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
                  <div className="date date-large-screen">
                    <FormattedDate value={currentDate} weekday='long' month='long' day='numeric' year='numeric'/>
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
                <hr className='hr-1-large-screen'/>
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
                <hr className='hr-2-large-screen'/>
                <hr className='hr-3-large-screen'/>
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
                            className={`menu-list menu-list-large-screen ${isMenuOpen ? "active" : ""}`}
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
    </IntlProvider>
  );
};

export default Header;

