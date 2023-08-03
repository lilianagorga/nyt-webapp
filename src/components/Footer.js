import React from 'react';
import '../assets/styles/footer.css'

const Footer = () => {
  const spanElements = ['NYTCo', 'Contact Us', 'Accessibility', 'Work with us', 'Advertise', 'T Brand Studio', 'Your Ad Choices', 'Privacy Policy', 'Term of Service', 'Term of Sale', 'Site Map', 'Help', 'Subscriptions'];

  return (
    <footer>  
      <div className='footer-container'>
        <hr />

        <span>Copyright &copy; 2023 New York Times</span>

        { spanElements.map((item, index) => <span key={index}>{item}</span>) }
      </div>
    </footer>
  );
};

export default Footer;
