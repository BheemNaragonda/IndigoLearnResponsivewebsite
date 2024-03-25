
import './App.css';
import Header from './components/Header';
import React from 'react';
import Banner from './components/banner/Banner';
import Chooseus from './components/ChooseUs/Chooseus';
import Learn from './components/learnsection/Learn';
import Placement from './components/placement/Placement';
import Contact from './components/contact/Contact';
function App() {
  return (
    <React.Fragment>
      <Header />
      <Banner  />
      <Chooseus/>
      <Learn/>
      <Placement />
      <Contact />
    </React.Fragment>
  );
}

export default App;
