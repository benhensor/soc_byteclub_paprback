import homeHero from '../assets/images/homeHero.jpg';
import { Link } from 'react-router-dom';
import './Home.css';
function Home() {
  return (
    <section className="pages" id="home">
      <div className="home-container">
        <div id="popin" className="header-title animate-pop-in">
          {' '}
          <h1>We are the chapters we share</h1>
        </div>
        <div id="popin" className="header-subtitle animate-pop-in">
          <h1>We are the stories we discover</h1>
        </div>
        <div id="popin" className="header-subtitle2 animate-pop-in">
          <h1>We are Paprback</h1>
        </div>

        <Link to="/listbook">
          <button id="heroSignup" className="signup">
            List a Book
          </button>
        </Link>
        <img className="hero" src={homeHero} alt="Logo" />
        <div className="hero-sub">
          <div id="subcontainer" className="whatContainer">
            <h1 id="subhead" className="what">
              What?
            </h1>
            <p className="whatText">
              Paprback is a book-swapping app where you have the
              unique opportunity to meet fellow readers in your local
              area and exchange books in person or by post.
            </p>
          </div>
          <div className="verticalLine"></div>
          <div id="subcontainer" className="whyContainer">
            <h1 id="subhead" className="why">
              Why?
            </h1>
            <p className="whyText">
              Our journey began with a shared concern: witnessing
              local libraries closing down and realising that people
              had limited access to books.
            </p>
          </div>
          <div className="verticalLine"></div>
          <div id="subcontainer" className="howContainer">
            <h1 id="subhead" className="how">
              How?
            </h1>
            <p className="howText">
              Start connecting with fellow book enthusiasts, initiate
              swaps, and let the magic of sharing stories unfold with
              Paprback!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
