import Header from '../../component/header/header';
import Footer from '../../component/footer/footer';
import Wave from '../../component/wave/wave';
import BlogList from '../../component/blog/blogList/blogList';
import style from  './home.less';
import {useEffect, useState} from "react";

const PHRASES = [
  'No Pain No Gain',
  'Always Know Who You Are',
  'Nothing As Bad As Uncertainty'
]

const Home = () => {

  const [pos, setPos] = useState(0);

  useEffect(() => {
    setTimeout(increase, 3000)
    return clearTimeout(increase);
  })
  const increase = () => {
    if (pos >= (PHRASES.length - 1) * 20) {
      setPos(0);
    } else {
      setPos(pos + 20);
    }
  }

  return (
    <>
      <div className={`${style.wrapper}`}>
        <header className="header-container">
          <Header />
          <div className="content">
            <div className="title">Just4u</div>
            <div className="description">
              <div style={{transform: `translateY(-${pos}px)`}}>
                {
                  PHRASES.map(item => (<div key={item}>{item}</div>))
                }
              </div>
            </div>
          </div>
          <Wave />
        </header>
        <section className="content-container">
          <BlogList />
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Home;
