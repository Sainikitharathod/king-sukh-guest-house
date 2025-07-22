import React, { useEffect } from 'react';

const Gallery = () => {
  const images = [
    { src: '/assets/images/1.jpg', alt: 'Outdoor Area', caption: 'Outdoor Retreat' },
    { src: '/assets/images/flower.jpg', alt: 'Garden View', caption: 'Verdant Garden' },
    { src: '/assets/images/ayodhya.webp', alt: 'Scenic View', caption: 'Ayodhya Landscape' },
    { src: '/assets/images/baranti.webp', alt: 'Baranti Hill', caption: 'Baranti Hill View' },
    { src: '/assets/images/palash.webp', alt: 'Palash Trees', caption: 'Palash Bloom' },
    { src: '/assets/images/mithonDam.webp', alt: 'Maithon Dam', caption: 'Maithon Dam' },
    { src: '/assets/images/view-from-top.jpg', alt: 'From Top View', caption: 'Resort View' },
    { src: '/assets/images/Room1.png', alt: 'Room View', caption: 'Room1 View' },
    { src: '/assets/images/room1.jpg', alt: 'Room View', caption: 'Room' },
  ];

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
        <h2 style={{ color: '#4A5D6A', fontWeight: '700', fontSize: '2.25rem', margin: 0 }}>GALLERY</h2>
      </div>
      <div className="row mt-3 row-cols-1 row-cols-md-3 g-2">
        {images.map((image, index) => (
          <div className="col" key={index}>
            <div className="card h-100 shadow-sm border-0 animate-on-load" style={{ backgroundColor: '#FFFFFF', borderRadius: '10px' }}>
              <img src={image.src} className="card-img-top img-fluid" alt={image.alt} style={{ objectFit: 'cover', height: '250px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
              <div className="card-body text-center p-3">
                <p className="card-text animate-on-load" style={{ color: '#666666', fontSize: '1rem' }}>{image.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;