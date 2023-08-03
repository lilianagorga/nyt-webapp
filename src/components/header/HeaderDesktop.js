import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { menuItems, formattedDate } from '../utils';
import logoImage from '../../assets/img/nytimes.png';
import logoScrollImage from '../../assets/img/nyt.png';

const HeaderBottomRow = () => {
  return (
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
  )
}

const HeaderScrolledBottomRow = ({ isScrolled, isMenuOpen, toggleMenu, setMenuOpen }) => {
  return (
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
  )
}

const HeaderDesktop = ({ isMenuOpen, toggleMenu, setMenuOpen, isScrolled }) => {
  return (
    <div className='header-desktop'>
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
          {formattedDate()}
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
      
      {!isScrolled && <HeaderBottomRow />}
      
      <hr className='hr-2-desktop'/>
      <hr className='hr-3-desktop'/>

      {isScrolled && 
        <HeaderScrolledBottomRow
          isScrolled={isScrolled}
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          setMenuOpen={setMenuOpen}
        />
      }
  </div>
  )
}

export default HeaderDesktop;