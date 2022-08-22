import Header from '../../component/header/header';
import Footer from '../../component/footer/footer';
import Wave from '../../component/wave/wave';
import BlogList from '../../component/blog/blogList/blogList'
import './home.css';
const Home = () => {
  return (
    <>
      <div className="wrapper">
        <header className="header-container">
          <Header />
          <div className="content">
            <div className="title">Just4u</div>
            <div className="description">No Pain No Gain</div>
          </div>
          <Wave />
        </header>
        <section className="content-container">
          <BlogList/>
        </section>
        <Footer />
      </div>

    </>
  );
};

export default Home;
