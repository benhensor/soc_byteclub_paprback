import Dashboard from '../components/Dashboard/Dashboard';
import ListYourBook from '../components/listYourBook/ListYourBook';
import ListingsCarousel from '../components/listingsCarousel/ListingsCarousel';
import './listbook.css';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

function ListBook() {
  const listBookRef = useRef(null);

  const handleListBookClick = () => {
    if (listBookRef.current) {
      listBookRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pages" id="list-book">
      <div className="list-book-container">
        <div className="overall-box">
          <Dashboard listBookRef={listBookRef} />
          <hr className="linebreak"></hr>
          <div className="listings-carousel-container">
            <ListingsCarousel />
          </div>
        </div>
        <div className="list-your-book" ref={listBookRef}>
          <ListYourBook />
        </div>

        <hr className="linebreak"></hr>
        <div className="listings-carousel-container">
          {/* <ListingsCarousel /> */}
        </div>
      </div>
    </section>
  );
}

export default ListBook;
