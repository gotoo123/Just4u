import React from 'react';
import './header.css';

const Header = () => {

  const navList = ['HOME', 'SEARCH'];

  return (
    <>
      <div className="header-content">
        <div className="header-logo">Just4u</div>
        <div className="header-nav">
          {navList.map(item =>
            <span className="nav-item" key={item}>{item}</span>
          )}
        </div>

      </div>
    </>
  )
}

export default Header;
