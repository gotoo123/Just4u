import React from 'react';
import styles from './index.less';
import { WorkExperience, Skills, Practices } from '../../data.js';

const Content = () => {
  const ContentBox = (props) => {
    const { title } = props;
    return (
      <div className={'intro-content-box'}>
        <div className={'intro-content-box-header'}>
          <div className={'intro-content-box-header-divider'} />
          <div className={'intro-content-box-header-title'}>{title}</div>
          <div className={'intro-content-box-header-divider'} />
        </div>
        <div className={'intro-content-box-content'}>{props.children}</div>
      </div>
    );
  };

  return (
    <div className={styles.contentWrapper}>
      <div className={'intro-content-wrapper'}>
        <ContentBox title={'个人技能'}>
          <ul className={'personal-skills'}>
            {Skills.map((skill) => (
              <li className={'personal-skill'}>{skill}</li>
            ))}
          </ul>
        </ContentBox>

        <ContentBox title={'工作经验'}>
          {WorkExperience.map((work) => (
            <div className={'work-experience'}>
              <section>
                <div className={'work-period'}>{work.period}</div>
                <div className={'work-company'}>{work.company}</div>
              </section>
              {work.project.map((item) => (
                <>
                  <div className={'work-project'}>{item.name}</div>
                  <ul className={'work-content'}>
                    {item.content.map((detail) => (
                      <li className={'work-content-item'}>{detail}</li>
                    ))}
                  </ul>
                </>
              ))}
            </div>
          ))}
        </ContentBox>
        <ContentBox title={'个人实践'}>
          <ul>
            {Practices.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </ContentBox>
      </div>
    </div>
  );
};

export default Content;
