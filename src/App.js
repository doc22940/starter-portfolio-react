import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import AppNavbar from './Components/AppNavbar';



function App() {

  return (
    <div className="App">
      <AppNavbar />
      <Header />
      <Body />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
