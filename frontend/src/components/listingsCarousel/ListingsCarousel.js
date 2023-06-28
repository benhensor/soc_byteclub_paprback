import './listingsCarousel.css';
import BookMyBook from '../BookMyBook/BookMyBook';
import { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function ListingsCarousel() {
  const [listings, setListings] = useState([]);

  // useEffect to fetch listings data from the API on component mount
  useEffect(() => {
    fetch(`https://paprback-backend.onrender.com/api/listings`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('No listings found');
        }
      })
      .then((data) => setListings(data.payload.myListings))
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // useEffect to log the listings whenever they change
  useEffect(() => {
    // console.log(listings);
  }, [listings]);

  return (
    <div id="listings-carousel">
      <h1 className="title-text">Your Listings</h1>
      <div data-testid="listing" className="books-grid">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className="carousel"
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          // infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          partialVisible
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            xxxxl: {
              breakpoint: {
                max: 10000,
                min: 1600,
              },
              items: 6,
              partialVisibilityGutter: 40,
            },
            xxxl: {
              breakpoint: {
                max: 1599,
                min: 1400,
              },
              items: 5,
              partialVisibilityGutter: 40,
            },
            xxl: {
              breakpoint: {
                max: 1399,
                min: 1290,
              },
              items: 4,
              partialVisibilityGutter: 40,
            },
            m: {
              breakpoint: {
                max: 1289,
                min: 601,
              },
              items: 3,
              partialVisibilityGutter: 30,
            },
            s: {
              breakpoint: {
                max: 600,
                min: 0,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {listings.map((book) => (
            // Rendering Book component for each listing
            <BookMyBook
              data-testid="listing"
              cover_img={book.cover_img}
              title={book.title}
              author={book.author}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default ListingsCarousel;
