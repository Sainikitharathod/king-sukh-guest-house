import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.email && formData.phone && formData.message) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    }
  };

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
        <h2 style={{ color: '#4A5D6A', fontWeight: '700', fontSize: '2.5rem', margin: 0 }}>CONTACT US</h2>
      </div>
      <div className="row mt-3 g-2">
        <div className="col-md-4">
          <div className="card shadow-lg border-0 h-100 animate-on-load" style={{ backgroundColor: '#FF69B4', borderRadius: '10px', transition: 'all 0.3s' }}>
            <div className="card-body p-3 text-center">
              <h5 className="card-title" style={{ color: '#2F4F4F', fontSize: '1.5rem', fontWeight: '600' }}>Contact Information</h5>
              <p className="card-text d-flex align-items-center justify-content-center mb-2" style={{ color: '#2F4F4F', fontSize: '1rem' }}>
                <i className="bi bi-geo-alt-fill me-2"></i><strong></strong> Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
              </p>
              <p className="card-text d-flex align-items-center justify-content-center mb-2" style={{ color: '#2F4F4F', fontSize: '1rem' }}>
                <i className="bi bi-envelope-fill me-2"></i><strong></strong> <a href="mailto:kkgosh009@gmail.com" className="text-decoration-none" style={{ color: '#2F4F4F' }}>kkgosh009@gmail.com</a>
              </p>
              <p className="card-text d-flex align-items-center justify-content-center mb-2" style={{ color: '#2F4F4F', fontSize: '1rem' }}>
                <i className="bi bi-telephone-fill me-2"></i><strong></strong> <a href="tel:+919007062180" className="text-decoration-none" style={{ color: '#2F4F4F' }}>+91 9007062180</a>
              </p>
              <div className="mt-2">
                <p className="card-text" style={{ color: '#2F4F4F', fontSize: '1rem' }}><strong>Social Media:</strong></p>
                <div className="d-flex justify-content-center gap-2">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src="/assets/images/facebook.png" alt="Facebook" style={{ width: '30px', transition: 'transform 0.3s' }} onMouseOver={e => e.target.style.transform = 'scale(1.1)'} onMouseOut={e => e.target.style.transform = 'scale(1)'} /></a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src="/assets/images/instagram.png" alt="Instagram" style={{ width: '30px', transition: 'transform 0.3s' }} onMouseOver={e => e.target.style.transform = 'scale(1.1)'} onMouseOut={e => e.target.style.transform = 'scale(1)'} /></a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src="/assets/images/twitter.png" alt="Twitter" style={{ width: '30px', transition: 'transform 0.3s' }} onMouseOver={e => e.target.style.transform = 'scale(1.1)'} onMouseOut={e => e.target.style.transform = 'scale(1)'} /></a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><img src="/assets/images/youtube.png" alt="Youtube" style={{ width: '30px', transition: 'transform 0.3s' }} onMouseOver={e => e.target.style.transform = 'scale(1.1)'} onMouseOut={e => e.target.style.transform = 'scale(1)'} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card shadow-lg border-0 h-100 animate-on-load" style={{ backgroundColor: '#F0F4F8', borderRadius: '10px', transition: 'all 0.3s' }}>
            <div className="card-body p-3">
              <h5 className="card-title" style={{ color: '#4A5D6A', fontSize: '1.5rem', fontWeight: '600' }}>Send Message</h5>
              {submitted && <div className="alert alert-success mt-2" role="alert">Thank you! Your message has been received.</div>}
              <form onSubmit={handleSubmit} className="contact-form mt-2">
                <div className="row g-2 mb-3">
                  <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label fw-bold animate-on-load" style={{ color: '#4A5D6A', fontSize: '1rem' }}>First Name</label>
                    <input
                      type="text"
                      className="form-control animate-on-load"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      required
                      style={{ borderRadius: '8px', padding: '12px', borderColor: '#CED4DA' }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label fw-bold animate-on-load" style={{ color: '#4A5D6A', fontSize: '1rem' }}>Last Name</label>
                    <input
                      type="text"
                      className="form-control animate-on-load"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      required
                      style={{ borderRadius: '8px', padding: '12px', borderColor: '#CED4DA' }}
                    />
                  </div>
                </div>
                <div className="row g-2 mb-3">
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label fw-bold animate-on-load" style={{ color: '#4A5D6A', fontSize: '1rem' }}>Email</label>
                    <input
                      type="email"
                      className="form-control animate-on-load"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      style={{ borderRadius: '8px', padding: '12px', borderColor: '#CED4DA' }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label fw-bold animate-on-load" style={{ color: '#4A5D6A', fontSize: '1rem' }}>Phone Number</label>
                    <input
                      type="tel"
                      className="form-control animate-on-load"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                      style={{ borderRadius: '8px', padding: '12px', borderColor: '#CED4DA' }}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-bold animate-on-load" style={{ color: '#4A5D6A', fontSize: '1rem' }}>Message</label>
                  <textarea
                    className="form-control animate-on-load"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    rows="5"
                    required
                    style={{ borderRadius: '8px', padding: '12px', borderColor: '#CED4DA', resize: 'vertical' }}
                  ></textarea>
                </div>
                <div className="text-center mt-2">
                  <button type="submit" className="btn btn-primary animate-on-load" style={{ backgroundColor: '#FF69B4', borderColor: '#4A5D6A', padding: '10px 20px', fontWeight: '600', fontSize: '1.1rem', borderRadius: '8px', maxWidth: '200px' }}>Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 text-center animate-on-load">
        <div className="card shadow-lg border-0 animate-on-load" style={{ backgroundColor: '#FFFFFF', borderRadius: '10px', overflow: 'hidden' }}>
          <div className="card-body p-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.123456!2d87.123456!3d23.654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2zMjPCsDIzJzE1LjYiTiA4N8KwMDAnMjkuMiJF!5e0!3m2!1sen!2sin!4v162594321!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;