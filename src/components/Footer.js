import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5" style={{ backgroundColor: '#2C3E50' }}>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col text-center">
            <h5 className="mb-3" style={{ color: 'Background', fontWeight: '700', fontSize: '1.25rem' }}>About Us</h5>
            <p style={{ color: '#BDC3C7', fontSize: '1.1rem' }}>Kingsukh Guest House offers a perfect blend of luxury and nature, nestled in the serene hills of Barhanti. Experience comfort and hospitality at its best.</p>
          </div>
          <div className="col text-center">
            <h5 className="mb-3" style={{ color: 'Background', fontWeight: '700', fontSize: '1.25rem' }}>Contact</h5>
            <p style={{ color: '#BDC3C7', fontSize: '1.1rem' }}>Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
            <p style={{ color: '#BDC3C7', fontSize: '1.1rem' }}>Email: <a href="mailto:kkgosh009@gmail.com" className="text-decoration-none" style={{ color: 'Highlight' }}>kkgosh009@gmail.com</a></p>
            <p style={{ color: '#BDC3C7', fontSize: '1.1rem' }}>Phone: <a href="tel:+919007062180" className="text-decoration-none" style={{ color: 'Highlight' }}>+91 9007062180</a></p>
          </div>
          <div className="col text-center">
            <h5 className="mb-3" style={{ color: 'Background', fontWeight: '700', fontSize: '1.25rem' }}>Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#home" className="text-decoration-none" style={{ color: '#BDC3C7', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = '#BDC3C7'} onMouseOut={e => e.target.style.color = '#BDC3C7'}>Home</a></li>
              <li className="mb-2"><a href="#about" className="text-decoration-none" style={{ color: '#BDC3C7', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = '#BDC3C7'} onMouseOut={e => e.target.style.color = '#BDC3C7'}>About</a></li>
              <li className="mb-2"><a href="#rooms" className="text-decoration-none" style={{ color: '#BDC3C7', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = '#BDC3C7'} onMouseOut={e => e.target.style.color = '#BDC3C7'}>Rooms</a></li>
              <li className="mb-2"><a href="#gallery" className="text-decoration-none" style={{ color: '#BDC3C7', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = '#BDC3C7'} onMouseOut={e => e.target.style.color = '#BDC3C7'}>Gallery</a></li>
              <li className="mb-2"><a href="#contact" className="text-decoration-none" style={{ color: '#BDC3C7', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = '#BDC3C7'} onMouseOut={e => e.target.style.color = '#BDC3C7'}>Contact</a></li>
            </ul>
          </div>
          <div className="col text-center">
            <h5 className="mb-3" style={{ color: 'Background', fontWeight: '700', fontSize: '1.25rem' }}>Follow Us</h5>
            <div className="d-flex justify-content-center gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white" style={{ fontSize: '1.5rem', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = '#BDC3C7'} onMouseOut={e => e.target.style.color = '#ECF0F1'}><i className="bi bi-facebook"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white" style={{ fontSize: '1.5rem', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = '#BDC3C7'} onMouseOut={e => e.target.style.color = '#ECF0F1'}><i className="bi bi-instagram"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white" style={{ fontSize: '1.5rem', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = '#BDC3C7'} onMouseOut={e => e.target.style.color = '#ECF0F1'}><i className="bi bi-twitter"></i></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white" style={{ fontSize: '1.5rem', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = '#BDC3C7'} onMouseOut={e => e.target.style.color = '#ECF0F1'}><i className="bi bi-youtube"></i></a>
            </div>
          </div>
        </div>
        <hr className="bg-light mt-4" style={{ opacity: 0.2, borderWidth: '1px' }} />
        <p className="text-center mt-3" style={{ color: '#BDC3C7', fontSize: '0.9rem' }}>© {new Date().getFullYear()} Kingsukh Guest House. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;