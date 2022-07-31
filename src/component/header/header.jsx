import React, {useContext} from 'react';
import './header.css';
import LocaleContext from "../locale-provider/context";

const Header = () => {
  const value = useContext(LocaleContext);
  const navList = Object.values(value);

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
