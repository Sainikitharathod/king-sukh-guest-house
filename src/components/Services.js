import React, { useEffect } from 'react';

const Services = () => {
  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-on-load');
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('animate__animated', 'animate__fadeInUp');
        }, index * 200); // 200ms delay between each element
      });
    };
    animateElements();
  }, []);

  return (
    <div className="container mt-3">
      <div className="text-center py-2 animate-on-load" style={{ backgroundColor: '#F8F9FA', borderBottom: '2px solid #4A5D6A', borderRadius: '10px 10px 0 0' }}>
        <h2 style={{ color: '#4A5D6A', fontWeight: '700', fontSize: '2.25rem', margin: 0 }}>SERVICES</h2>
      </div>
      <div className="text-center mb-2 animate-on-load">
        <img 
          src="assets/images/service.jpg" 
          alt="Services Header" 
          style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', borderRadius: '10px' }} 
        />
      </div>
      <h3 className="display-6 text-center fw-bold mb-2 animate-on-load" style={{ color: '#4A5D6A' }}>Strive Only For The Best</h3>
      <div className="row g-2">
        <div className="col-md-3">
          <div className="card h-100 shadow-sm border-0 animate-on-load" style={{ backgroundColor: '#F5F5F5', borderRadius: '10px' }}>
            <div className="card-body text-center p-3">
              <div className="service-icon mb-2" style={{ width: '60px', height: '60px', margin: '0 auto', backgroundColor: '#4A5D6A', borderRadius: '50%' }}>
                <i className="bi bi-shield-fill" style={{ fontSize: '1.5rem', color: '#FFFFFF' }}></i>
              </div>
              <h5 className="card-title animate-on-load" style={{ color: '#333333', fontSize: '1.25rem', fontWeight: '600' }}>High Class Security</h5>
              <p className="card-text animate-on-load" style={{ color: '#666666', fontSize: '1rem' }}>Ensuring your safety with advanced security measures 24/7.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card h-100 shadow-sm border-0 animate-on-load" style={{ backgroundColor: '#F5F5F5', borderRadius: '10px' }}>
            <div className="card-body text-center p-3">
              <div className="service-icon mb-2" style={{ width: '60px', height: '60px', margin: '0 auto', backgroundColor: '#4A5D6A', borderRadius: '50%' }}>
                <i className="bi bi-clock" style={{ fontSize: '1.5rem', color: '#FFFFFF' }}></i>
              </div>
              <h5 className="card-title animate-on-load" style={{ color: '#333333', fontSize: '1.25rem', fontWeight: '600' }}>24 Hours Room Service</h5>
              <p className="card-text animate-on-load" style={{ color: '#666666', fontSize: '1rem' }}>Round-the-clock service to meet your every need.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card h-100 shadow-sm border-0 animate-on-load" style={{ backgroundColor: '#F5F5F5', borderRadius: '10px' }}>
            <div className="card-body text-center p-3">
              <div className="service-icon mb-2" style={{ width: '60px', height: '60px', margin: '0 auto', backgroundColor: '#4A5D6A', borderRadius: '50%' }}>
                <i className="bi bi-cup-hot" style={{ fontSize: '1.5rem', color: '#FFFFFF' }}></i>
              </div>
              <h5 className="card-title animate-on-load" style={{ color: '#333333', fontSize: '1.25rem', fontWeight: '600' }}>Restaurant</h5>
              <p className="card-text animate-on-load" style={{ color: '#666666', fontSize: '1rem' }}>Enjoy a variety of delicious meals prepared with care.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card h-100 shadow-sm border-0 animate-on-load" style={{ backgroundColor: '#F5F5F5', borderRadius: '10px' }}>
            <div className="card-body text-center p-3">
              <div className="service-icon mb-2" style={{ width: '60px', height: '60px', margin: '0 auto', backgroundColor: '#4A5D6A', borderRadius: '50%' }}>
                <i className="bi bi-compass" style={{ fontSize: '1.5rem', color: '#FFFFFF' }}></i>
              </div>
              <h5 className="card-title animate-on-load" style={{ color: '#333333', fontSize: '1.25rem', fontWeight: '600' }}>Tourist Guide Support</h5>
              <p className="card-text animate-on-load" style={{ color: '#666666', fontSize: '1rem' }}>Expert guides to explore the local attractions.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3 py-2 animate-on-load" style={{ backgroundColor: '#F8F9FA', borderRadius: '10px' }}>
        <div className="col-md-6 text-center">
          <h4 style={{ color: '#4A5D6A', fontWeight: '700', fontSize: '1.75rem' }}>100+ Booking Completed</h4>
          <p style={{ color: '#666666', fontSize: '1rem' }}>Trusted by guests for exceptional service.</p>
        </div>
        <div className="col-md-6 text-center">
          <h4 style={{ color: '#4A5D6A', fontWeight: '700', fontSize: '1.75rem' }}>150+ Happy Customers</h4>
          <p style={{ color: '#666666', fontSize: '1rem' }}>Satisfied guests sharing their experiences.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;