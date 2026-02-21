import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../pagescss/Socials.css';

// --- IMPORT CHARACTERS ---
import char1 from '../assets/char1.png';
import char2 from '../assets/char2.png';
import char3 from '../assets/char3.png';

function Socials() {
  const [skin, setSkin] = useState(char1);

  // Form state for the Guestbook
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Load the player's character choice
  useEffect(() => {
    const savedIndex = localStorage.getItem('selectedSkin');
    if (savedIndex) {
      const index = parseInt(savedIndex);
      if (index === 0) setSkin(char1);
      if (index === 1) setSkin(char2);
      if (index === 2) setSkin(char3);
    }
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = (e) => {
    e.preventDefault();
    alert(`Sign placed! Thanks for the message, ${formData.name}.`);
    setFormData({ name: '', email: '', message: '' }); // Clear form
  };

  return (
    <div className="socials-wrapper">
      <div className="mc-panel socials-panel">
        
        {/* --- TOP SECTION: CONTACT & AVATAR --- */}
        <div className="contact-hero">
          
          {/* LEFT SIDE: Text and Links */}
          <div className="contact-info">
            <h1 className="contact-title">contact me</h1>
            <p className="contact-sub">
              Do you speak Java? It's ok if you don't, I speak English too.
            </p>

            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-row">
                <div className="social-icon fb">f</div>
                <span>Like me on Facebook</span>
              </a>
              
              <a href="https://github.com" target="_blank" rel="noreferrer" className="social-row">
                <div className="social-icon gh">🐙</div>
                <span>Check my GitHub repos</span>
              </a>

              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-row">
                <div className="social-icon ig">📸</div>
                <span>Follow me on Instagram</span>
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-row">
                <div className="social-icon in">in</div>
                <span>Connect with me on LinkedIn</span>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Large Character Image */}
          <div className="contact-avatar">
            <img src={skin} alt="Selected Character" className="hero-char-img" />
          </div>

        </div>

        <hr className="mc-divider" />

        {/* --- BOTTOM SECTION: GUESTBOOK --- */}
        <div className="guestbook-section">
          <h2 className="guestbook-title">Send me an email / Guestbook</h2>
          
          <form className="mc-form" onSubmit={handleSend}>
            <div className="form-row">
              <div className="input-group">
                <label>Your name:</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  required 
                  className="mc-input"
                />
              </div>
              
              <div className="input-group">
                <label>Your email:</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  required 
                  className="mc-input"
                />
              </div>
            </div>

            <div className="input-group">
              <label>Your message:</label>
              <textarea 
                name="message" 
                rows="4" 
                value={formData.message} 
                onChange={handleInputChange} 
                required 
                className="mc-input mc-textarea"
              ></textarea>
            </div>

            <button type="submit" className="mc-btn-large guestbook-btn">
              Place Sign (Send)
            </button>
          </form>
        </div>

        <Link to="/" className="back-link center-link">Return to Menu</Link>
      </div>
    </div>
  );
}

export default Socials;