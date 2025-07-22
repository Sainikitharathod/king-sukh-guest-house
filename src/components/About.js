import React, { useEffect } from 'react';

const About = () => {
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
      <div className="text-center py-2 animate-on-load" style={{ backgroundColor: '#F8F9FA', borderBottom: '2px solid #4A5D6A' }}>
        <h2 style={{ color: '#4A5D6A', fontWeight: '700', fontSize: '2.25rem', margin: 0 }}>ABOUT US</h2>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <div className="card shadow-sm border-0 animate-on-load" style={{ backgroundColor: '#FFFFFF', borderRadius: '10px' }}>
            <div className="card-body p-3">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <img src="/assets/images/out.jpg" className="img-fluid rounded animate-on-load" alt="Kingsukh Guest House" style={{ objectFit: 'cover', maxWidth: '900px', maxHeight: '450px', borderRadius: '10px' }} />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center ps-3">
                  <h3 className="display-6 fw-bold mb-2 animate-on-load" style={{ color: '#4A5D6A' }}>The Best Holidays Start Here!</h3>
                  <p className="lead mb-2 animate-on-load" style={{ color: 'black', fontSize: '1.1rem', lineHeight: '1.6' }}>
                    Embark on a tranquil journey at Kingsukh Guest House, nestled amidst the scenic beauty of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garh Panchkot, Baranti Dam, Maithon Dam, and Panchakot Dam. Experience unmatched comfort, savor delightful cuisine, and relax in our lush garden oasis. Our retreat offers a perfect harmony of nature’s splendor and warm hospitality.
                  </p>
                  <ul className="list-unstyled mt-2">
                    <li className="mb-2 animate-on-load"><i className="bi bi-check-circle text-primary me-2" style={{ color: '#4A5D6A' }}></i><span style={{ color: '#666666' }}>Scenic Hill Views</span></li>
                    <li className="mb-2 animate-on-load"><i className="bi bi-check-circle text-primary me-2" style={{ color: '#4A5D6A' }}></i><span style={{ color: '#666666' }}>Luxurious Accommodations</span></li>
                    <li className="mb-2 animate-on-load"><i className="bi bi-check-circle text-primary me-2" style={{ color: '#4A5D6A' }}></i><span style={{ color: '#666666' }}>Personalized Service</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;