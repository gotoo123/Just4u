import { Link } from 'react-router-dom';
import './page-sider.css';

const PageSider = (props) => {
  const { title, menu } = props;
  return menu.map((item) => {
    return (
      <div className="page-sider-wrapper">
        <div className="page-sider-title">{title}</div>
        <div className="page-sider-list">
          <Link to={item.route}>
            <div className="page-sider-item">{item.name}</div>
          </Link>
        </div>
      </div>
    );
  });
};

export default PageSider;
