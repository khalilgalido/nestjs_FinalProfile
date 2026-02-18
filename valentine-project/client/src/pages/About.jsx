import { Link } from 'react-router-dom';
import '../pagescss/About.css';

function About() {
  return (
    <div className="mc-panel about-panel">
      <h2 className="mc-title">Player Stats</h2>
      
      <div className="about-content">
        {/* --- LEFT SIDE: AVATAR --- */}
        <div className="avatar-section">
          <img 
            src="https://api.mineatar.io/body/full/Steve" 
            alt="Skin" 
            className="about-skin"
          />
          <div className="gamertag">Khalil</div>
        </div>

        {/* --- RIGHT SIDE: STATS --- */}
        <div className="stats-section">
          <p><strong>Class:</strong> Lazy Developer 👨‍💻</p>
          <p><strong>Level:</strong> IT Student (Lvl 20)</p>
          <p><strong>Guild:</strong> Taguig City</p>
          
          <hr className="mc-divider"/>

          <h3>⚔️ Main Quests (Interests)</h3>
          <ul className="interest-list">
            <li>🏀 <strong>Basketball:</strong> Big fan of LeBron James (The Goat)</li>
            <li>🎮 <strong>Gaming:</strong> Just a typical hobby to pass time</li>
            <li>📸 <strong>Photography:</strong> Capturing the moment</li>
            <li>🚗 <strong>Cars:</strong> Speed & Engineering</li>
          </ul>

          <hr className="mc-divider"/>

          <h3>📜 Bio</h3>
          <p className="bio-text">
            "I write code, break code, and then fix code. When I'm not debugging, 
            I'm probably watching the Lakers or sleeping."
          </p>
        </div>
      </div>

      <Link to="/" className="back-link">Close Book</Link>
    </div>
  );
}

export default About;