import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Rooms from './components/Rooms';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Home />
      <section id="about" className="container mt-5">
        <About />
      </section>
      <section id="services" className="container mt-5">
        <Services />
      </section>
      <section id="rooms" className="container mt-5">
        <Rooms />
      </section>
      <section id="gallery" className="container mt-5">
        <Gallery />
      </section>
      <section id="contact" className="container mt-5">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default App;