import React from 'react';
import Header from './components/header/Header';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import BrowseBooks from './pages/BrowseBooks';
import BookView from './pages/BookView';
import About from './pages/About';
import FAQ from './pages/FAQ';
import ListBook from './pages/ListBook';
import Offer from './pages/Offer';

import Footer from './components/footer/Footer';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
  const [message, setMessage] = useState('');
  useEffect(() => {
    fetch('https://paprback-backend.onrender.com/message')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  });

  useEffect(() => {
    console.log('Message:', message);
  }, [message]);

  
  
  return (
    <main className="App">
      <Header />
      <div id="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/browse" element={<BrowseBooks />} />
          <Route
            path="/bookview/:listing_id"
            element={<BookView />}
          />
          <Route path="/listbook" element={<ListBook />} />
          <Route path="/offer" element={<Offer />} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
}

export default App;
