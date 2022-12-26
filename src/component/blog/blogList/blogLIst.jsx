import BlogItem from '../blogItem/blogItem';
import blogConfig from '../blog.config';
import style from './blogList.less';

const BlogList = () => {
  return (
    <div className={`${style.blogListWrap}`}>
      {blogConfig.map((item) => (
        <BlogItem key={item.title} desc={item.desc} intro={item.intro} title={item.title} md={item.md} />
      ))}
    </div>
  );
};
export default BlogList;
