import './blogItem.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BlogItem = (props) => {
  const { title, desc, intro } = props;
  return (
    <Link to={`/blog/${title}`}>
      <div className="blog-item-wrap">
        <div className="title">{title}</div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div className="desc">{desc}</div>
          <div className="intro">{intro}</div>
        </div>

        <div className="divider" />
      </div>
    </Link>
  );
};

BlogItem.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
  desc: PropTypes.string,
};

export default BlogItem;
