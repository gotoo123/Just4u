import { Outlet } from 'react-router-dom';
import PageSider from '../../component/page-sider/page-sider';
import Header from '../../component/header/header';
import { menu } from './menu';
import './lab.css';
const Lab = () => {
  return (
    <>
      <Header theme="black" />
      <div className="lab-wrapper">
        <div>
          <PageSider title="LAB" menu={menu} />
        </div>
        <div className="lab-content-wrapper">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Lab;
