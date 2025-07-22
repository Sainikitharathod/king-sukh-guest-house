import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-on-load');
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('animate__animated', 'animate__fadeInUp');
        }, index * 200); // 200ms delay between each element
      });
      const title = document.querySelector('.display-4');
      if (title) {
        setTimeout(() => {
          title.classList.add('animate__animated', 'animate__slideInLeft');
        }, 0); 
      }
    };
    animateElements();
  }, []);

  return (
    <div>
      {/* Navbar Section */}
      <nav className="navbar navbar-expand-lg animate-on-load" style={{ padding: '0.5rem 0', background: 'rgba(0, 0, 0, 0.6)', position: 'absolute', top: 0, width: '100%', zIndex: 3 }}>
        <div className="container">
          <a className="navbar-brand text-white fw-bold" href="#home" style={{ fontSize: '1.3rem', lineHeight: '1.1' }}>
            Kingsukh<br />Guest House
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" style={{ borderColor: '#fff' }}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-white" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#rooms">Rooms</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#gallery">Gallery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#contact">Contact</a>
              </li>
            </ul>
            <a href="https://wa.me/919007062180" className="btn btn-primary ms-3" style={{ backgroundColor: '#FF69B4', borderColor: '#FF69B4', padding: '6px 15px', fontWeight: '500' }}>BOOK NOW</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section position-relative animate-on-load" style={{ height: '70vh', overflow: 'hidden' }}>
        <img src="/assets/images/header.jpg" className="img-fluid w-100" alt="Kingsukh Guest House Hero" style={{ objectFit: 'cover', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }} />
        <div className="overlay bg-dark opacity-50" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}></div>
        <div className="container h-100 position-relative" style={{ zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', color: '#fff' }}>
          <h1 className="display-4 fw-bold" style={{ color: 'ButtonHighlight', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>Welcome to Kingsukh Guest House</h1>
          <p className="lead mt-2" style={{ color: '', visibility: 'visible', minHeight: '1px' }}>Make Yourself At Home In Our Guest House.</p>
          <a href="#rooms" className="btn btn-primary btn-lg mt-2" style={{ backgroundColor: '#2F4F4F', borderColor: '#2F4F4F' }}>Book Your Stay</a>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="container mt-3">
        <h2 className="text-center mb-2" style={{ color: '#2F4F4F', fontWeight: '700' }}>Why Choose Us</h2>
        <div className="row text-center g-2">
          <div className="col-md-4 mb-2">
            <div className="card shadow-sm p-3 animate-on-load" style={{ backgroundColor: '#F5F5F5' }}>
              <i className="bi bi-house-fill fs-1 mb-1" style={{ color: '#2F4F4F' }}></i>
              <h5 style={{ color: '#333333', fontWeight: '600' }}>Comfortable Rooms</h5>
              <p>Experience spacious rooms with modern furnishings, plush bedding, and a cozy ambiance designed for ultimate relaxation and comfort.</p>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className="card shadow-sm p-3 animate-on-load" style={{ backgroundColor: '#F5F5F5' }}>
              <i className="bi bi-tree-fill fs-1 mb-1" style={{ color: '#2F4F4F' }}></i>
              <h5 style={{ color: '#333333', fontWeight: '600' }}>Natural Surroundings</h5>
              <p>Immerse yourself in peaceful hill views, fresh mountain air, and explore nearby trails and nature spots for a rejuvenating escape.</p>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className="card shadow-sm p-3 animate-on-load" style={{ backgroundColor: '#F5F5F5' }}>
              <i className="bi bi-person-check-fill fs-1 mb-1" style={{ color: '#2F4F4F' }}></i>
              <h5 style={{ color: '#333333', fontWeight: '600' }}>Exceptional Service</h5>
              <p>Enjoy 24/7 staff support, personalized care, and a commitment to guest satisfaction that makes your stay truly memorable.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;