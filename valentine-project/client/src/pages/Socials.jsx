import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../pagescss/Socials.css';

// --- IMPORT CHARACTERS ---
import char1 from '../assets/char1.png';
import char2 from '../assets/char2.png';
import char3 from '../assets/char3.png';

function Socials() {
  const [skin, setSkin] = useState(char1);

  // Form state for the Guestbook (No email, just Name and Message)
  const [formData, setFormData] = useState({ name: '', message: '' });

  // Chat Log State (Pre-filled with some fun server messages)
  const [chatLogs, setChatLogs] = useState([
    { id: 1, name: "Server", text: "Welcome to the portfolio server!" },
    { id: 2, name: "Notch", text: "Nice builds. Keep grinding." },
    { id: 3, name: "Herobrine", text: "I'm watching your code..." }
  ]);

  const chatEndRef = useRef(null);

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

  // Auto-scroll to the bottom of the chat when a new message is added
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatLogs]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;

    // Add new message to the chat log
    const newMsg = {
      id: Date.now(),
      name: formData.name,
      text: formData.message
    };

    setChatLogs([...chatLogs, newMsg]);
    
    // Clear the message input, but keep the name so they can type again quickly
    setFormData({ ...formData, message: '' }); 
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
              <a href="https://facebook.com/kaleligop13" target="_blank" rel="noreferrer" className="social-row">
                <div className="social-icon fb">f</div>
                <span>Like me on Facebook</span>
              </a>
              
              <a href="https://github.com/khalilgalido" target="_blank" rel="noreferrer" className="social-row">
                <div className="social-icon gh">🐙</div>
                <span>Check my GitHub repos</span>
              </a>

              <a href="https://instagram.com/rei.sales" target="_blank" rel="noreferrer" className="social-row">
                <div className="social-icon ig">📸</div>
                <span>Follow me on Instagram</span>
              </a>

              <a href="https://linkedin.com/in/khalil-galido-266030369/" target="_blank" rel="noreferrer" className="social-row">
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

        {/* --- BOTTOM SECTION: GUESTBOOK & CHAT --- */}
        <div className="guestbook-section">
          <h2 className="guestbook-title">Server Chat / Guestbook</h2>
          
          {/* MINECRAFT CHAT BOX */}
          <div className="mc-chat-box">
            {chatLogs.map((chat) => (
              <div key={chat.id} className="chat-message">
                {chat.name === "Server" ? (
                  <span className="chat-server-text">[Server] {chat.text}</span>
                ) : (
                  <>
                    <span className="chat-name">&lt;{chat.name}&gt;</span>
                    <span className="chat-text"> {chat.text}</span>
                  </>
                )}
              </div>
            ))}
            <div ref={chatEndRef} /> {/* Invisible element to snap scroll to bottom */}
          </div>

          {/* CHAT INPUT FORM */}
          <form className="mc-chat-form" onSubmit={handleSend}>
            <div className="chat-inputs">
              <input 
                type="text" 
                name="name" 
                placeholder="Gamertag (Name)"
                value={formData.name} 
                onChange={handleInputChange} 
                required 
                className="mc-input chat-name-input"
                maxLength="16"
              />
              <input 
                type="text" 
                name="message" 
                placeholder="Type a message..."
                value={formData.message} 
                onChange={handleInputChange} 
                required 
                className="mc-input chat-msg-input"
                autoComplete="off"
              />
              <button type="submit" className="mc-btn-small chat-send-btn">
                Send ⮞
              </button>
            </div>
          </form>

        </div>

        <Link to="/" className="back-link center-link">Return to Menu</Link>
      </div>
    </div>
  );
}

export default Socials;