import './FAQ.css';
import faq2 from './../assets/images/faq2.jpg';
import { useState } from 'react';

const FAQ2 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleContent = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="pages" id="faq">
      <div className="faq-container">
        <div className="faq">
          <div className="faq-content">
            <h1 id="pagetitle">FAQ</h1>
            <ul id="list">
              <br></br>
              <br></br>
              <li
                className={`title ${
                  activeIndex === 1 ? 'active' : ''
                }`}
                onClick={() => toggleContent(1)}
              >
                Safety Guidelines{' '}
                <img
                  id="caron"
                  className="caron"
                  src="https://img.icons8.com/ios/50/000000/expand-arrow--v1.png"
                  alt="caron"
                />
              </li>
              <li
                className={`content ${
                  activeIndex === 1 ? 'open' : ''
                }`}
              >
                At Paprback, we prioritize the safety and well-being
                of all participants, especially when it comes to
                meeting strangers. We have established several safety
                guidelines to ensure a secure environment. These
                guidelines include recommending participants to meet
                in well-lit public spaces, preferably during daylight
                hours, and suggesting bringing a friend along for
                added security. We also encourage participants to
                exchange contact information beforehand and to notify
                a trusted person about the meetup details. It's
                important to trust your instincts and choose a neutral
                location for the swap. We advocate for open
                communication and respectful behaviour among
                participants. By following these safety guidelines, we
                strive to create a positive and secure environment for
                book lovers to connect, swap books, and foster a sense
                of community.
              </li>
              <hr></hr>
              <li
                className={`title ${
                  activeIndex === 2 ? 'active' : ''
                }`}
                onClick={() => toggleContent(2)}
              >
                Vacation Mode{' '}
                <img
                  id="caron"
                  className="caron"
                  src="https://img.icons8.com/ios/50/000000/expand-arrow--v1.png"
                  alt="caron"
                />
              </li>
              <li
                className={`content ${
                  activeIndex === 2 ? 'open' : ''
                }`}
              >
                At Paprback, we prioritize the safety and well-being
                of all participants, especially when it comes to
                meeting strangers. We have established several safety
                guidelines to ensure a secure environment. These
                guidelines include recommending participants to meet
                in well-lit public spaces, preferably during daylight
                hours, and suggesting bringing a friend along for
                added security. We also encourage participants to
                exchange contact information beforehand and to notify
                a trusted person about the meetup details. It's
                important to trust your instincts and choose a neutral
                location for the swap. We advocate for open
                communication and respectful behaviour among
                participants. By following these safety guidelines, we
                strive to create a positive and secure environment for
                book lovers to connect, swap books, and foster a sense
                of community.
              </li>
              <hr></hr>
              <li
                className={`title ${
                  activeIndex === 3 ? 'active' : ''
                }`}
                onClick={() => toggleContent(3)}
              >
                Postage & Delivery
                <img
                  id="caron"
                  className="caron"
                  src="https://img.icons8.com/ios/50/000000/expand-arrow--v1.png"
                  alt="caron"
                />
              </li>
              <li
                className={`content ${
                  activeIndex === 3 ? 'open' : ''
                }`}
              >
                At Paprback, we prioritize the safety and well-being
                of all participants, especially when it comes to
                meeting strangers. We have established several safety
                guidelines to ensure a secure environment. These
                guidelines include recommending participants to meet
                in well-lit public spaces, preferably during daylight
                hours, and suggesting bringing a friend along for
                added security. We also encourage participants to
                exchange contact information beforehand and to notify
                a trusted person about the meetup details. It's
                important to trust your instincts and choose a neutral
                location for the swap. We advocate for open
                communication and respectful behaviour among
                participants. By following these safety guidelines, we
                strive to create a positive and secure environment for
                book lovers to connect, swap books, and foster a sense
                of community.
              </li>
              <hr></hr>
              <li
                className={`title ${
                  activeIndex === 4 ? 'active' : ''
                }`}
                onClick={() => toggleContent(4)}
              >
                How much is it?{' '}
                <img
                  id="caron"
                  className="caron"
                  src="https://img.icons8.com/ios/50/000000/expand-arrow--v1.png"
                  alt="caron"
                />
              </li>
              <li
                className={`content ${
                  activeIndex === 4 ? 'open' : ''
                }`}
              >
                At Paprback, we prioritize the safety and well-being
                of all participants, especially when it comes to
                meeting strangers. We have established several safety
                guidelines to ensure a secure environment. These
                guidelines include recommending participants to meet
                in well-lit public spaces, preferably during daylight
                hours, and suggesting bringing a friend along for
                added security. We also encourage participants to
                exchange contact information beforehand and to notify
                a trusted person about the meetup details. It's
                important to trust your instincts and choose a neutral
                location for the swap. We advocate for open
                communication and respectful behaviour among
                participants. By following these safety guidelines, we
                strive to create a positive and secure environment for
                book lovers to connect, swap books, and foster a sense
                of community.
              </li>
            </ul>
          </div>
          <img className="faqimg" src={faq2} alt="FAQ" />
        </div>
      </div>
    </section>
  );
};

export default FAQ2;
