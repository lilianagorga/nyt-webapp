import React, { useState, useEffect } from 'react';
import '../assets/styles/header.css';
import { useNavigate } from 'react-router-dom';
import HeaderMobile from './header/HeaderMobile';
import HeaderDesktop from './header/HeaderDesktop';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [sectionParam, setSectionParam] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (sectionParam.trim() !== '') {
      if (sectionParam.trim() === 'home') {
        navigate('/')
      } else {
        navigate(`/section/${sectionParam}`)
      }
    }
  }
  
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = isMenuOpen && isMobile ? 'hidden' : 'auto';
  }, [isMenuOpen, isMobile]);

  const handleScroll = () => {
    const isHeaderScrolled = window.scrollY > 0;
    setScrolled(isHeaderScrolled);
  };

  const handleResize = () => {
    const isMobileView = window.innerWidth <= 1024;
    setIsMobile(isMobileView);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={`header ${isMenuOpen && isScrolled ? 'active' : ''} ${isScrolled ? 'scrolled' : ''} ${isMobile ? 'mobile' : ''}`}>
      <div className="header-container">
        {isMobile ? (
          <HeaderMobile 
            toggleMenu={toggleMenu}
            isMenuOpen={isMenuOpen}
            setSectionParam={setSectionParam}
            handleSubmit={handleSubmit}
          />
        ) : (
          <HeaderDesktop 
            isMenuOpen={isMenuOpen}
            setMenuOpen={setMenuOpen}
            toggleMenu={toggleMenu}
            isScrolled={isScrolled}
          />
        )}
      </div>
    </header>
  );
};

export default Header;