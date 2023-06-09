import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Book from '../components/book/Book';
import './browseBooks.css';

function Books() {
  const [searchTerm, setSearchTerm] = useState('');
  const [listings, setListings] = useState([]);
  const [userLatitude, setUserLatitude] = useState(null);
  const [userLongitude, setUserLongitude] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);

  const navToBookView = useNavigate();

  useEffect(() => {
    listingsCall();
  }, []);

  const listingsCall = async () => {
    try {
      const response = await fetch(
        'https://paprback-backend.onrender.com/api/listings'
      );
      const data = await response.json();

      if (response.ok) {
        setListings(data.payload.othersListings);
        setUserLatitude(data.payload.myListings[0].latitude);
        setUserLongitude(data.payload.myListings[0].longitude);
      } else {
        setListings([]);
      }
    } catch (error) {
      console.error('Error fetching listings:', error);
      setListings([]);
    }
  };

  function calcDistance(listingLatitude, listingLongitude) {
    if (userLatitude === null || userLongitude === null) {
      // User's latitude and longitude not available
      return null;
    }

    const earthRadius = 6371; // Radius of the earth in km
    const latitudeDifference = deg2rad(
      listingLatitude - userLatitude
    ); // deg2rad below
    const longitudeDifference = deg2rad(
      listingLongitude - userLongitude
    );

    const a =
      Math.sin(latitudeDifference / 2) *
        Math.sin(latitudeDifference / 2) +
      Math.cos(deg2rad(userLatitude)) *
        Math.cos(deg2rad(listingLatitude)) *
        Math.sin(longitudeDifference / 2) *
        Math.sin(longitudeDifference / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c; // Distance in km

    return distance;
  }

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    const filteredListings = listings.filter((listing) => {
      const title = listing.title ? listing.title.toLowerCase() : '';
      const author = listing.author
        ? listing.author.toLowerCase()
        : '';
      const isbn = listing.isbn ? listing.isbn.toLowerCase() : '';

      return (
        title.includes(searchTerm.toLowerCase()) ||
        author.includes(searchTerm.toLowerCase()) ||
        isbn.includes(searchTerm.toLowerCase())
      );
    });

    if (filteredListings.length === 0) {
      // Book not found
      alert('Book not found');
    } else {
      setListings(filteredListings);
    }

    const searchInput = document.querySelector('.searchInputBrowse');
    searchInput.value = '';
    const close = document.getElementById('book-close');
    close.style.display = 'block';
    const searchedBook = document.getElementById('book-enclosure');
    searchedBook.style.gridTemplateColumns =
      'repeat(1, minmax(150px, 1fr)';
  };

  const handleBookClick = (listing) => {
    console.log('Book Clicked:', listing);
    setSelectedBook(listing);
    console.log('Selected Book:', selectedBook);
    navToBookView(`/bookview/${listing.listing_id}`, {
      state: {
        selectedBook: listing,
        distance: calcDistance(listing.latitude, listing.longitude),
      },
    });
  };

  const handleCloseClick = () => {
    const close = document.getElementById('book-close');
    close.style.display = 'none';
    window.location.reload();
  };

  return (
    <section className="pages" id="browse">
      <div className="books-container">
        <h1>Browse Books</h1>
        <div className="search-container">
          <input
            data-testid="search-input"
            className="searchInputBrowse"
            type="text"
            placeholder="Search"
            onChange={handleSearchChange}
          />
          <button
            data-testid="search-button"
            className="searchButtons"
            onClick={handleSearchClick}
          >
            Search
          </button>
          <button id="book-close" onClick={handleCloseClick}>
            Close
          </button>
        </div>

        <div id="books-grid">
          {listings.map((listing) => (
            <div id="book-enclosure" key={listing.listing_id}>
              <Book
                id="grid-book"
                cover_img={listing.cover_img}
                title={listing.title}
                author={listing.author}
                onClick={() => handleBookClick(listing)}
                handleCloseClick={handleCloseClick}
                distance={calcDistance(
                  listing.latitude,
                  listing.longitude
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Books;
