import React, { useContext } from 'react';
import LocaleContext from '../locale-provider/context';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './header.less';

const Header = (props) => {
  const res = useContext(LocaleContext);
  const list = [];
  Object.keys(res).forEach((key) => {
    list.push([key, res[key]]);
  });

  return (
    <>
      <div className={`${style.wrapper}`}>
        <div
            className={`header-content ${
                props.theme === 'black' ? 'header-content-font-black' : ''
            }`}
        >
          <Link to={`/home`}>
            <div className="header-logo">Just4u</div>
          </Link>
          <div className="header-nav">
            {list.map((item) => {
              let linkTo = item[0];
              if(item[0] === 'lab') {
                linkTo = 'lab/test';
              }
              return (
                <Link to={`/${linkTo}`} key={item[0]}>
                  <span className="nav-item">{item[1]}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
};

Header.propTypes = {
  theme: PropTypes.string,
};

export default Header;
