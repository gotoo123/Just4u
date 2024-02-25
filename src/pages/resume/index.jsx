import React from 'react';
import styles from './index.less';
import Header from './components/header/index.jsx';
import Content from './components/content/index.jsx';
import { useNavigate } from 'react-router-dom';

const Resume = () => {
  // const navigate = useNavigate();
  // const handleClick = () => {
  //   // navigate('/');
  //   const a = document.getElementsByTagName('html')[0];
  //   a.style.transform = 'scale(0.5)';
  //   window.print();
  //   a.style.transform = 'unset';
  // };
  return (
    <div className={styles.resumeWrapper}>
      {/*<button onClick={handleClick}>返回</button>*/}
      <div className={'intro-wrapper'}>
        <Header />
        <Content />
      </div>
    </div>
  );
};

export default Resume;
