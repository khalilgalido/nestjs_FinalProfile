import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="mc-container">
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
  );
}

export default Home;