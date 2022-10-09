import React from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import GlobalStyle from './globalStyles';
import Contact from './pages/Contact';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';


function App() {
  return ( 
  <Router>
      <GlobalStyle/>
      <Navbar/>
      <Routes>
        <Route path="/portfolio-page" element = {<Home/>}/>
        <Route path="/portfolio-page/Contact" element = {<Contact/>}/>
      </Routes>
      <Footer/>
  </Router> 
  );
}

export default App;
