import React from 'react';
import styles from './index.less';

const Header = () => {
  return (
    <div className={styles.introHeaderWrapper}>
      <section className={`intro-title`}>
        <div className={`intro-title-left`}>
          <div className={'name'}>王煜东</div>
          <div className={'name-description'}>Name</div>
        </div>
        <div className={`intro-title-right`}>
          <h1>前端开发工程师</h1>
          <h5>/成都</h5>
        </div>
      </section>

      <section className={`intro-info`}>
        <div className={`intro-info-left`}>
          <div>男 / 1999.10</div>
          <div>本科 / 2021年毕业 · 3年工作经验</div>
          <div>西安电子科技大学 · 计算机科学与技术</div>
        </div>
        <div className={`intro-info-right`}>
          <div>Tel: 18681952753</div>
          <div>Email: cs_ydwang@163.com</div>
        </div>

      </section>
    </div>
  )
}

export default Header;
