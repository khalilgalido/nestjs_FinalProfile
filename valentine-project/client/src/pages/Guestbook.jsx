import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Your API URL from your screenshot
const API_URL = "https://nestjs-valentines-backened.onrender.com/guestbook";

function Guestbook() {
  const [messages, setMessages] = useState([]);
  const [form, setForm] = useState({ name: "", message: "" });

  const fetchMessages = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      if (Array.isArray(data)) setMessages(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  useEffect(() => { fetchMessages(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.message) return;
    
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setForm({ name: "", message: "" });
    fetchMessages();
  };

  return (
    <div className="mc-panel">
      <h2 className="mc-title">Guestbook</h2>
      
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Name" 
          value={form.name} 
          onChange={e => setForm({...form, name: e.target.value})} 
        />
        <textarea 
          placeholder="Write a message..." 
          value={form.message} 
          onChange={e => setForm({...form, message: e.target.value})} 
        />
        <button type="submit" className="mc-btn small">Sign Book</button>
      </form>

      <div className="message-list">
        {messages.map(msg => (
          <div key={msg.id} className="message-item">
            <span className="name">&lt;{msg.name}&gt;</span> {msg.message}
          </div>
        ))}
      </div>

      <Link to="/" className="back-link">Back to Menu</Link>
    </div>
  );
}

export default Guestbook;