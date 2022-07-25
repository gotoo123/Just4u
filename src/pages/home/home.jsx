import Header from '../../component/header/header'
import Wave from '../../component/wave/wave'
import './home.css'
const Home = () => {
  return (
    <>
      <header className="header-container">
        <Header/>
        <div className="content">
          <div className="title">
            Just4u
          </div>
          <div className="description">
            No Pain No Gain
          </div>
        </div>
        <Wave/>
      </header>
      <section className="content-container">

      </section>

    </>
  )
}

export default Home();
