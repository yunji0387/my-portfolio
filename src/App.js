import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './partials/Name';
import Footer from './partials/Footer';
import Navbar from './partials/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <div className='main-content'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
