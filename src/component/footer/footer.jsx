import './footer.css';
import { link } from './link';
const Footer = () => {
  const handleClick = (href) => {
    window.location.href = href;
  };

  return (
    <div className="footer-wrapper">
      <div className="link-list">
        {link.map((item) => {
          return (
            <div className="link-item" key={item.icon}>
              <img
                src={item.icon}
                alt=""
                onClick={() => handleClick(item.href)}
              />
            </div>
          );
        })}
      </div>
      <span className="footer-description">Copyright © GOTOO 2022</span>
    </div>
  );
};

export default Footer;
