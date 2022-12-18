import Markdown from '../markdown/markdown';
import { useLocation } from 'react-router-dom';
import blogConfig from './blog.config';
import style from './blog.less';

const Blog = () => {
  const location = useLocation();
  const title = location.pathname.replace('/blog/', '');
  let md;
  blogConfig.forEach((item) => {
    if (item.title === title) {
      md = item.md;
    }
  });
  return (
    <div className={`${style.markdownWrap}`}>
      <Markdown md={md} />
    </div>
  );
};

export default Blog;
