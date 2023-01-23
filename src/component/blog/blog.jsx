import Markdown from '../markdown/markdown';
import { useLocation } from 'react-router-dom';
import blogConfig from './blog.config';
import style from './blog.less';
import Header from "../header/header";
import ArrowLeft from '../../assets/icon/arrow-left.svg';
import {useNavigate} from "react-router";

const Blog = () => {
  const location = useLocation();
  const title = location.pathname.replace('/blog/', '');
  const navigate = useNavigate();
  let md;
  blogConfig.forEach((item) => {
    if (item.title === title) {
      md = item.md;
    }
  });


  function backStep() {
    navigate('/home');
  }

  return (
    <>
      <Header theme="black" />
      <div className={`${style.markdownWrap}`}>
        <Markdown md={md} />
      </div>
      <div className={style.backStep} onClick={backStep}>
        <img src={ArrowLeft}/>
        <span>返回</span>
      </div>
    </>
  );
};

export default Blog;
