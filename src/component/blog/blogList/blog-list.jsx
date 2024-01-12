import BlogItem from '../blogItem/blog-item';
import style from './blog-list.less';
import {useEffect, useState} from "react";
import {axiosGet} from "../../../api";

const BlogList = () => {
  const [blogConfig, setBlogConfig] = useState([]);

  useEffect(() => {
    axiosGet(`/api/list`)
      .then((res) => {
      setBlogConfig(res.data);
    })
      .catch(err => {
        console.log(err);
      })
  },[])

  return (
    <div className={`${style.blogListWrap}`}>
      {blogConfig.map((item) => (
        <BlogItem id={item.id} key={item.id} desc={item.desc} intro={item.intro} title={item.title} md={item.md} />
      ))}
    </div>
  );
};
export default BlogList;
