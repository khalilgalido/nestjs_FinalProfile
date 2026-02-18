import { Link } from 'react-router-dom';
import videoBg from '../assets/openingscreen.mp4'; // Import the video

function Home() {
  return (
    <div className="home-container">
      {/* BACKGROUND VIDEO */}
      <video autoPlay loop muted playsInline className="video-bg">
        <source src={videoBg} type="video/mp4" />
      </video>

      {/* OVERLAY (Darkens video slightly so text pops) */}
      <div className="video-overlay"></div>

      {/* CONTENT (Your Menu) */}
      <div className="mc-content">
        <h1 className="mc-logo">MINECRAFT PROFILE</h1>
        <p className="mc-subtitle">Rei Khalil S. Galido</p>

        <div className="menu-grid">
          <Link to="/guestbook" className="mc-btn">Guestbook</Link>
          <Link to="/about" className="mc-btn">Information</Link>
          <Link to="/gallery" className="mc-btn">Gallery</Link>
          <Link to="/portfolio" className="mc-btn">Portfolio</Link>
          <Link to="/socials" className="mc-btn">Socials</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;