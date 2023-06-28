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
              <li className={`content ${activeIndex === 2 ? "open" : ""}`}>
              If you're planning to be away or temporarily unable to participate in book swapping, our platform offers a convenient 'holiday mode' feature. 
              By activating holiday mode, your account will be temporarily set to an inactive status, preventing other users from attempting to interact with you during this period.
               This helps maintain a smooth and efficient experience for active users while respecting the availability and preferences of others. Once you're ready to resume book swapping, simply deactivate holiday mode to make your account active again. 
               This feature ensures that your book exchanging experience remains flexible and tailored to your needs 
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
              <li className={`content ${activeIndex === 3 ? "open" : ""}`}>
              When posting a book for swap on our platform, it's important to specify your preferred method of exchange. You can indicate whether you're open to swapping the book in person, willing to post it, or open to both options. 
              However, please note that our posting service is restricted to the United Kingdom only. We kindly request users to ensure the accuracy of their mailing addresses and to package the books securely for shipping. 
              It's important to understand that our company cannot be held liable for any missing, damaged, or undelivered books during the shipping process. We encourage participants to communicate openly about their expectations and to choose a reliable postal service for book exchanges.
               By acknowledging these considerations, we aim to facilitate smooth and successful book swaps while prioritising user responsibility and understanding
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
              <li className={`content ${activeIndex === 4 ? "open" : ""}`}>
                Paprback is a free service. We do not charge any fees for listing or swapping a book. 
                We also do not charge any fees for posting a book. However, we do not cover the cost of postage.
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
