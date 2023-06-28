import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CoverDefault from "../assets/images/coverDefault.png";
import "./offer.css";

// Navigate to this page

// Contact form to send an offer to another user

// Form displays other users email address

function Offer() {
  const navToHome = useNavigate();
  const location = useLocation();
  const [messageSent, setMessageSent] = useState(false);

  const otherBook = location.state.selectedBook;
  const distance = location.state.distance;
  const [delivery, setDelivery] = useState("");
  const [message, setMessage] = useState("");
  const [myListings, setMyListings] = useState([]);
  const [mySelectedBook, setMySelectedBook] = useState({
    cover_img: CoverDefault,
    title: "",
    author: "",
    condition: "",
  });

  useEffect(() => {
    listingsCall();
    // console.log("MY LISTINGS", myListings)
  }, []);

  async function listingsCall() {
    try {
      const response = await fetch("https://paprback-backend.onrender.com/api/listings");
      const data = await response.json();

      if (response.ok) {
        setMyListings(data.payload.myListings);
      } else {
        setMyListings([]);
      }
    } catch (error) {
      console.error("Error fetching listings:", error);
      setMyListings([]);
    }
  }

  const handleSelect = (event) => {
    const selectedListing = myListings.find((listing) => {
      const optionValue = event.target.value;
      const [listingId, title, condition] = optionValue.split(":");
      console.log(title, condition);
      return listing.listing_id === parseInt(listingId);
    });

    if (selectedListing) {
      setMySelectedBook(selectedListing);
    }
  };

  function updateDelivery(e) {
    // e is the event object
    setDelivery(e.target.value); // Update the condition state with the value from the select element
  }

  function updateMessage(e) {
    // e is the event object
    setMessage(e.target.value); // Update the condition state with the value from the select element
  }

  const handleMessageClick = () => {
    if (
      mySelectedBook !==
        {
          cover_img: CoverDefault,
          title: "",
          author: "",
          condition: "",
        } &&
      delivery !== "" &&
      message !== ""
    ) {
      setMessageSent(true);
      setTimeout(() => {
        navToHome("/");
      }, 1500);
    }
  };

  return (
    <section className="pages" id="offer">
      <div className="offer-container">
        {!messageSent && (
          <div id="pre-message">
            <h1>Make Your Swap</h1>
            <div id="select-your-book">
              <label htmlFor="select">Select your book</label>
              <form id="select-book" onChange={handleSelect}>
                <select
                  className="selectDropdown" // Add custom class here
                  name="select"
                  placeholder="Select your book *"
                >
                  <option value="defaultValue" disabled selected>
                    {" "}
                    * Select your book{" "}
                  </option>
                  {myListings.map((listing) => (
                    <option
                      value={`${listing.listing_id}:${listing.title}:${listing.condition}`}
                      key={listing.listing_id}
                    >
                      {listing.title} - {listing.condition}
                    </option>
                  ))}
                </select>
              </form>
            </div>
            <div id="books-display">
              <div id="my-book" className="offer-books">
                <img
                  src={mySelectedBook.cover_img}
                  alt={mySelectedBook.title}
                ></img>
                <h3>{mySelectedBook.title}</h3>
                <h3 id="author">{mySelectedBook.author}</h3>
                <h4>{mySelectedBook.condition}</h4>
              </div>
              <div id="swap-icon">
                <p id="left">←</p>
                <p id="right">→</p>
              </div>
              <div id="their-book" className="offer-books">
                <img src={otherBook.cover_img} alt={otherBook.title}></img>
                <h3>{otherBook.title}</h3>
                <h3 id="author">{otherBook.author}</h3>
                <h4>{otherBook.condition}</h4>
                <h3 id="distance">
                  <span>{Math.round(distance)} miles</span>
                </h3>
              </div>
            </div>
            <form id="delivery" onChange={updateDelivery}>
              <select
                className="deliveryDropdown" // Add custom class here
                name="Delivery option"
                placeholder="Delivery option *"
              >
                <option value="Select your delivery option" disabled selected>
                  {" "}
                  * Select your delivery option{" "}
                </option>
                <option value="collection">Collection</option>
                <option value="post">Post</option>
                <option value="Either">Either</option>
              </select>
            </form>
            <textarea
              rows="5"
              id="message"
              type="text"
              placeholder="* Message the owner"
              onChange={updateMessage}
            ></textarea>
            <button id="send-offer" onClick={handleMessageClick}>
              Contact Owner
            </button>
          </div>
        )}
        {messageSent ? (
          <div id="post-message">
            <h2>Message sent!</h2>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default Offer;
