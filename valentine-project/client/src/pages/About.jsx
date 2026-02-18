import { useState, useEffect } from 'react'; // Added Hooks
import { Link } from 'react-router-dom';
import '../pagescss/About.css';

// --- IMPORT SAME CHARACTERS ---
import char1 from '../assets/char1.png';
import char2 from '../assets/char2.png';
import char3 from '../assets/char3.png';

function About() {
  const [skin, setSkin] = useState(char1); // Default to first skin
  const [skinName, setSkinName] = useState("Steve");

  // --- CHECK MEMORY ON LOAD ---
  useEffect(() => {
    const savedIndex = localStorage.getItem('selectedSkin');
    if (savedIndex) {
      const index = parseInt(savedIndex);
      if (index === 0) { setSkin(char1); setSkinName("Khalil"); } // You can rename "Steve" to "Khalil" here if you want
      if (index === 1) { setSkin(char2); setSkinName("Alex"); }
      if (index === 2) { setSkin(char3); setSkinName("Herobrine"); }
    }
  }, []);

  return (
    <div className="about-wrapper"> {/* New Wrapper for centering */}
      <div className="mc-panel about-panel">
        <h2 className="mc-title">Player Stats</h2>
        
        <div className="about-split-layout">
          
          {/* --- LEFT SIDE --- */}
          <div className="about-column left-col">
            <div className="avatar-row">
              <div className="avatar-box">
                {/* DYNAMIC SKIN IMAGE */}
                <img src={skin} alt="Skin" className="about-skin" />
                <div className="gamertag">{skinName}</div>
              </div>
              
              <div className="stats-text">
                <p><strong>Class:</strong> Lazy Developer 👨‍💻</p>
                <p><strong>Level:</strong> IT Student (Lvl 20)</p>
                <p><strong>Guild:</strong> Taguig City</p>
              </div>
            </div>

            <hr className="mc-divider"/>

            <h3>⚔️ Main Quests (Interests)</h3>
            <ul className="interest-list">
              <li>🏀 <strong>Basketball:</strong> LeBron James (The Goat)</li>
              <li>🎮 <strong>Gaming:</strong> Casual Grinding</li>
              <li>📸 <strong>Photography:</strong> Capturing Moments</li>
              <li>🚗 <strong>Cars:</strong> Speed & Engineering</li>
            </ul>

            <hr className="mc-divider"/>

            <h3>📜 Bio</h3>
            <p className="bio-text">
              "I write code, break code, and then fix code. When I'm not debugging, 
              I'm probably watching the Lakers or sleeping."
            </p>
          </div>

          {/* --- VERTICAL DIVIDER --- */}
          <div className="vertical-line"></div>

          {/* --- RIGHT SIDE --- */}
          <div className="about-column right-col">
            <h3>🔮 Skill Tree (Tech Stack)</h3>
            <div className="skill-grid">
              <div className="skill-item">⚛️ React.js</div>
              <div className="skill-item">🦁 NestJS</div>
              <div className="skill-item">🐬 MySQL</div>
              <div className="skill-item">🤖 Arduino</div>
              <div className="skill-item">🎨 CSS/Tailwind</div>
              <div className="skill-item">☁️ Supabase</div>
            </div>

            <hr className="mc-divider"/>

            <h3>🎒 Inventory (Tools)</h3>
            <ul className="interest-list">
              <li>💻 <strong>Laptop:</strong> VS Code Main</li>
              <li>🎧 <strong>Headset:</strong> Noise Cancelling</li>
              <li>☕ <strong>Fuel:</strong> Iced Coffee</li>
            </ul>

            <hr className="mc-divider"/>

            <h3>🎵 Music Disc</h3>
            <div className="music-box">
              <p>Now Playing:</p>
              <strong>C418 - Sweden</strong>
              <div className="progress-bar">
                <div className="fill"></div>
              </div>
            </div>
          </div>

        </div>

        <Link to="/" className="back-link">Return Menu</Link>
      </div>
    </div>
  );
}

export default About;