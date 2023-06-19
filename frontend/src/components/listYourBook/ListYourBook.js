import ListYourBookInput from '../listYourBookInput/ListYourBookInput';
import ListYourBookOutput from '../listYourBookOutput/ListYourBookOutput';
import React, { useState, useEffect } from 'react';
import './listYourBook.css';

function ListYourBook() {
  // State variables
  const [condition, setCondition] = useState('');
  const [notes, setNotes] = useState('');

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState({
    title: '',
    author: '',
    cover_img: '',
    isbn: '',
  });
  const [newListing, setNewListing] = useState({
    title: '',
    author: '',
    isbn: '',
    condition: '',
    notes: '',
    cover_img: '',
    user_id: '',
  });

  const reset = () => {
    setCondition('');
    setNotes('');
    setSearchTerm('');
  };

  // useEffect(() => {  REMOVED
  //   setNewListing((prevState) => ({
  //     ...prevState,
  //     condition: condition,
  //     notes: notes,
  //   }));
  // }, [condition, notes]);
  useEffect(() => {
    //Added this useEffect
    console.log(newListing);
  }, [newListing]); //

  useEffect(() => {
    console.log(searchResult);
  }, [searchResult]);

  // Function to handle changes in the search bar input
  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  // Function to handle Enter key press in the search bar
  function handleEnter(e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
      handleSearchClick();
    }
  }

  // Function to handle the search button click
  async function handleSearchClick() {
    if (searchTerm) {
      await fetch(`http://localhost:5432/api/books/${searchTerm}`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error('No book found');
          }
        })
        .then((data) => {
          setSearchResult(data.payload[0]);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setSearchResult({
            title: '',
            author: '',
            cover_img: '',
            isbn: '',
          });
          alert('No book found. Please try again.');
        });
    }
  }

  // Function to update the condition state
  function updateCondition(e) {
    setCondition(e.target.value);
  }

  // Function to update the notes state
  function updateNotes(e) {
    setNotes(e.target.value);
  }

  function handleListingClick() {
    setNewListing({
      title: searchResult.title,
      author: searchResult.author,
      isbn: searchResult.isbn,
      cover_img: searchResult.cover_img,
      condition: condition,
      notes: notes,
    });
    console.log(newListing);
  }
  // // Make the API call when newListing state changes
  useEffect(() => {
    if (newListing.title !== '') {
      fetch('http://localhost:5432/api/listings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newListing),
      })
        .then((res) => {
          if (res.ok) {
            console.log('Listing created successfully!');
            return res.json();
          } else {
            throw new Error('Failed to create listing');
          }
        })
        .then((data) => {
          console.table(newListing);
          
        })
        .catch((error) => {
          console.error('Error creating listing:', error);
        });
        
      
    }
  }, [newListing]);

  // Render the component
  return (
    <div id="listBookContainer">
      <h1>List Your Book</h1>
      {/* Render the input component for the search bar */}
      <ListYourBookInput
        onChange={handleChange}
        onClick={handleSearchClick}
        onKeyPress={handleEnter}
      />
      {/* Render the output component for the book listing */}
      <ListYourBookOutput
        onClick={handleListingClick}
        onChangeCondition={updateCondition}
        onChangeNotes={updateNotes}
        book={searchResult}
      />
    </div>
  );
}

export default ListYourBook;
