import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../pagescss/Socials.css';

// --- IMPORT CHARACTERS ---
import char1 from '../assets/char1.png';
import char2 from '../assets/char2.png';
import char3 from '../assets/char3.png';

function Socials() {
  const [skin, setSkin] = useState(char1);

  // Form state
  const [formData, setFormData] = useState({ name: '', message: '' });

  // Chat Log State
  const [chatLogs, setChatLogs] = useState([]);
  
  const chatEndRef = useRef(null);

  // ⚠️ PASTE YOUR EXACT BACKEND URL FROM YOUR MAIN MENU HERE ⚠️
  // Example: 'http://localhost:3001/guestbook' or 'https://my-nestjs-app.com/guestbook'
  const API_URL = 'https://nestjs-valentines-backened.onrender.com/guestbook'; 

  // --- 1. FETCH GUESTBOOK DATA FROM YOUR BACKEND ---
  const fetchGuestbook = async () => {
    try {
      const response = await fetch(API_URL); 
      if (response.ok) {
        const data = await response.json();
        
        // DEBUG: This will print your database messages to your browser console!
        console.log("Database Data received:", data); 
        
        setChatLogs(data);
      } else {
        console.error("Failed to fetch. Server responded with status:", response.status);
      }
    } catch (error) {
      console.error("Failed to fetch guestbook (Check your API_URL):", error);
    }
  };

  // Load character & fetch data when page loads
  useEffect(() => {
    const savedIndex = localStorage.getItem('selectedSkin');
    if (savedIndex) {
      const index = parseInt(savedIndex);
      if (index === 0) setSkin(char1);
      if (index === 1) setSkin(char2);
      if (index === 2) setSkin(char3);
    }
    
    // Get messages from DB
    fetchGuestbook();
  }, []);

  // Auto-scroll to the bottom of the chat when messages update
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatLogs]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- 2. SEND NEW MESSAGE TO YOUR BACKEND ---
  const handleSend = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          message: formData.message
        }),
      });

      if (response.ok) {
        // Clear the message input, but keep the name so they can type again quickly
        setFormData({ ...formData, message: '' }); 
        
        // Refresh the chat log from the database
        fetchGuestbook();
      }
    } catch (error) {
      console.error("Failed to post message:", error);
    }
  };

  return (
    <div className="socials-wrapper">
      <div className="mc-panel socials-panel">
        
        {/* --- TOP SECTION: CONTACT & AVATAR --- */}
        <div className="contact-hero">
          
          <div className="contact-info">
            <h1 className="contact-title">contact me</h1>
            <p className="contact-sub">
              lets connect brochacho, emergency hoop sesh allat shi
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

          <div className="contact-avatar">
            <img src={skin} alt="Selected Character" className="hero-char-img" />
          </div>

        </div>

        <hr className="mc-divider" />

        {/* --- BOTTOM SECTION: DATABASE GUESTBOOK CHAT --- */}
        <div className="guestbook-section">
          <h2 className="guestbook-title">Server Chat / Guestbook</h2>
          
          <div className="mc-chat-box">
            {/* If the database is empty, show a system message */}
            {chatLogs.length === 0 && (
              <div className="chat-message">
                <span className="chat-server-text">[Server] No messages yet. Be the first to type!</span>
              </div>
            )}

            {/* Map through the database entries */}
            {chatLogs.map((chat, index) => (
              <div key={chat.id || index} className="chat-message">
                <span className="chat-name">&lt;{chat.name}&gt;</span>
                <span className="chat-text"> {chat.message}</span>
              </div>
            ))}
            <div ref={chatEndRef} />
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