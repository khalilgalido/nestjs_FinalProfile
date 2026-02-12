import { useState, useEffect } from 'react';
import './App.css';

// YOUR API URL
const API_URL = "https://fuzzy-space-tribble-q7jqqq5pxg992xx44-3000.app.github.dev/guestbook"; 

function App() {
  const [accepted, setAccepted] = useState(false);
  const [messages, setMessages] = useState([]);
  const [form, setForm] = useState({ name: "", message: "" });
  const [noStyle, setNoStyle] = useState({});

  // Fetch Messages
  const fetchMessages = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      if(Array.isArray(data)) setMessages(data);
    } catch (error) {
      console.error("Error fetching:", error);
    }
  };

  useEffect(() => { fetchMessages(); }, []);

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setForm({ name: "", message: "" });
    fetchMessages();
  };

  // Handle Delete
  const handleDelete = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchMessages();
  };

  // Run-away "No" button logic
  const moveNo = () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    setNoStyle({ transform: `translate(${x}px, ${y}px)` });
  };

  return (
    <div className="app-container">
      
      {/* Valentine Section */}
      <div className="hero">
        <h1>{accepted ? "YAY! 💖" : "Be My Valentine?"}</h1>
        
        {!accepted ? (
          <>
            <div className="buttons">
              <button className="yes-btn" onClick={() => setAccepted(true)}>YES</button>
              <button 
                className="no-btn" 
                style={noStyle} 
                onMouseEnter={moveNo}
              >
                No
              </button>
            </div>
            <p className="pleading-text">Please don't press No! 🥺</p>
          </>
        ) : (
          <div style={{ fontSize: "5rem", marginTop: "20px" }}>💑</div>
        )}
      </div>

      <hr style={{ opacity: 0.3, margin: "30px 0" }} />

      {/* Guestbook Section */}
      <div className="guestbook">
        <h2>Guestbook</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
              placeholder="Name" 
              value={form.name} 
              onChange={e => setForm({...form, name: e.target.value})} 
              required 
            />
            <input 
              placeholder="Message" 
              value={form.message} 
              onChange={e => setForm({...form, message: e.target.value})} 
              required 
            />
          </div>
          <button type="submit" className="sign-btn">Sign</button>
        </form>

        <ul className="message-list">
          {messages.map(msg => (
            <li key={msg.id} className="message-card">
              <div>
                <strong>{msg.name}:</strong> {msg.message}
              </div>
              <button className="delete-btn" onClick={() => handleDelete(msg.id)}>✕</button>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default App;