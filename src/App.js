import React from 'react';
import './App.css';
import Header from './Components/Header'; 
import Body from './Components/Body';
import Contact from './Components/Contact';
import Footer from './Components/Footer';



function App() {  

  return (
    <div className="App">

      <Header/>
      <Body/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
