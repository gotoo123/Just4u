import React, { useContext } from 'react';
import './header.css';
import LocaleContext from '../locale-provider/context';
import {Link} from "react-router-dom";

const Header = () => {
  const res = useContext(LocaleContext);
  const list = [];
  Object.keys(res).forEach((key) => {
    list.push([key, res[key]]);
  })

  return (
    <>
      <div className="header-content">
        <div className="header-logo">Just4u</div>
        <div className="header-nav">
          {list.map((item) => (
            <Link to={`/${item[0]}`} key={item[0]}>
              <span className="nav-item">
                {item[1]}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
