import imgabout from './../assets/images/imgabout.jpg';
import './About.css';

function About() {
  return (
    <section className="pages" id="about">
      <div className="about-container">
        <div className="about-info">
          <img className="aboutimg" src={imgabout} alt="about us" />
          <section className="about-text">
            <h1 id="pagetitle">About Us</h1>
            <p>
              <br></br>
              Our journey began with a shared concern: witnessing
              local libraries closing down and realising that people
              had limited access to books. Driven by our belief that
              literature is a precious gift that should be accessible
              to all, we set out to make a difference. Our core values
              revolve around fostering communities, promoting
              sustainable practices, and making reading an inclusive
              experience. <br></br>
              <br></br> With these principles at heart, Paprback, your
              friendly neighbourhood book swapping app, came into
              existence. We are passionate about connecting book
              lovers and empowering them to share their favourite
              stories, exchange knowledge, and foster a sense of
              belonging. By providing a platform where readers can
              connect with others in their local area and beyond,
              Paprback encourages the joy of discovery and the
              preservation of the written word.
              <br></br>
              <br></br> Furthermore, we are committed to
              environmentally friendly practices. By promoting book
              swapping, we actively contribute to reducing paper waste
              and embracing the concept of reusing resources. We
              believe that every book has a story to tell and should
              find its way into the hands of someone who will cherish
              it. Join us on this novel adventure, where the love for
              books knows no bounds. <br></br> Together, let's build a
              community that celebrates the power of literature,
              supports one another, and makes a positive impact on the
              world around us.
              <br></br>
              <br></br>
            </p>

            <h3 className="subStatement">
              We are the chapters we share. We are the stories we
              discover.
            </h3>
            <h3 className="mainStatement">We are Paprback.</h3>
          </section>
        </div>
      </div>
    </section>
  );
}

export default About;
