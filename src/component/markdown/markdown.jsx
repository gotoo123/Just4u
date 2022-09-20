import React from 'react';
import { marked } from 'marked';
import PropTypes from 'prop-types';

const Markdown = (props) => {
  const a = marked.parse(props.md);
  return <div dangerouslySetInnerHTML={{ __html: a }} />;
};

Markdown.propTypes = {
  md: PropTypes.string,
};

export default Markdown;
