import React, { useEffect } from 'react';

const Rooms = () => {
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
        <h2 style={{ color: '#4A5D6A', fontWeight: '700', fontSize: '2.25rem', margin: 0 }}>ROOMS</h2>
      </div>
      <div className="row mt-3 g-2">
        <div className="col-md-4 mb-2">
          <div className="card h-100 shadow-sm border-0 animate-on-load" style={{ backgroundColor: '#FFFFFF', borderRadius: '10px' }}>
            <img src="/assets/images/small.jpg" className="card-img-top" alt="Cozy Room" style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px', objectFit: 'cover', height: '250px' }} />
            <div className="card-body d-flex flex-column justify-content-between p-3">
              <div>
                <h5 className="card-title animate-on-load" style={{ color: '#4A5D6A', fontSize: '1.25rem', fontWeight: '600' }}>Cozy Haven Room</h5>
                <p className="card-text animate-on-load" style={{ color: '#666666', fontSize: '1rem' }}>Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.</p>
                <p className="card-text animate-on-load" style={{ color: '#666666', fontSize: '1rem', fontWeight: '500' }}>Starting from: 1000/night</p>
              </div>
              <div className="text-center mt-2">
                <a href="https://wa.me/919007062180?text=Hello,%20I%20want%20to%20book%20a%20Cozy%20Room" className="btn btn-primary" style={{ backgroundColor: '#FF69B4', borderColor: '#FF69B4', padding: '8px 20px', fontWeight: '500', width: '100%', maxWidth: '150px' }}>Book Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-2">
          <div className="card h-100 shadow-sm border-0 animate-on-load" style={{ backgroundColor: '#FFFFFF', borderRadius: '10px' }}>
            <img src="/assets/images/large.jpg" className="card-img-top" alt="Spacious Suite" style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px', objectFit: 'cover', height: '250px' }} />
            <div className="card-body d-flex flex-column justify-content-between p-3">
              <div>
                <h5 className="card-title animate-on-load" style={{ color: '#4A5D6A', fontSize: '1.25rem', fontWeight: '600' }}>Spacious Serenity Suite</h5>
                <p className="card-text animate-on-load" style={{ color: '#666666', fontSize: '1rem' }}>Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.</p>
                <p className="card-text animate-on-load" style={{ color: '#666666', fontSize: '1rem', fontWeight: '500' }}>Starting from: 1500/night</p>
              </div>
              <div className="text-center mt-2">
                <a href="https://wa.me/919007062180?text=Hello,%20I%20want%20to%20book%20a%20Spacious%20Suite" className="btn btn-primary" style={{ backgroundColor: '#FF69B4', borderColor: '#FF69B4', padding: '8px 20px', fontWeight: '500', width: '100%', maxWidth: '150px' }}>Book Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-2">
          <div className="card h-100 shadow-sm border-0 animate-on-load" style={{ backgroundColor: '#FFFFFF', borderRadius: '10px' }}>
            <img src="/assets/images/xso18mbs.png" className="card-img-top" alt="Compact Room" style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px', objectFit: 'cover', height: '250px' }} />
            <div className="card-body d-flex flex-column justify-content-between p-3">
              <div>
                <h5 className="card-title animate-on-load" style={{ color: '#4A5D6A', fontSize: '1.25rem', fontWeight: '600' }}>Compact Room</h5>
                <p className="card-text animate-on-load" style={{ color: '#666666', fontSize: '1rem' }}>Cozy and affordable stay with essential comforts.</p>
                <p className="card-text animate-on-load" style={{ color: '#666666', fontSize: '1rem', fontWeight: '500' }}>Starting from: 2000/night</p>
              </div>
              <div className="text-center mt-2">
                <a href="https://wa.me/919007062180?text=Hello,%20I%20want%20to%20book%20a%20Compact%20Room" className="btn btn-primary" style={{ backgroundColor: '#FF69B4', borderColor: '#FF69B4', padding: '8px 20px', fontWeight: '500', width: '100%', maxWidth: '150px' }}>Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;