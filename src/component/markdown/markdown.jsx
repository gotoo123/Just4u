import React from 'react';
import { marked } from "marked";

const Markdown = (props) => {
  const a = marked.parse(props.md);
  return <div dangerouslySetInnerHTML={{__html: a}}/>
}

export default Markdown;
