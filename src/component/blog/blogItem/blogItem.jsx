import './blogItem.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BlogItem = (props) => {
  const { title } = props;
  return (
    <Link to={`/blog/${title}`}>
      <div className="blog-item-wrap">
        <div className="title">{title}</div>
        <div className="intro">hello</div>
        <div className="desc">hello</div>
        <div className="divider" />
      </div>
    </Link>
  );
};

BlogItem.propTypes = {
  title: PropTypes.string,
};

export default BlogItem;
