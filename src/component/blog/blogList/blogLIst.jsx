import BlogItem from '../blogItem/blogItem';
import blogConfig from '../blog.config';

const BlogList = () => {
  return (
    <div>
      {blogConfig.map((item) => (
        <BlogItem key={item.title} desc={item.desc} intro={item.intro} title={item.title} md={item.md} />
      ))}
    </div>
  );
};
export default BlogList;
