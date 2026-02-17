import { Link } from 'react-router-dom';

function Socials() {
  return (
    <div className="mc-panel">
      <h2 className="mc-title">Socials</h2>
      <ul className="social-list">
        <li><a href="#" className="mc-link">GitHub</a></li>
        <li><a href="#" className="mc-link">LinkedIn</a></li>
        <li><a href="mailto:rei05khalil@gmail.com" className="mc-link">Email</a></li>
      </ul>
      <Link to="/" className="back-link">Back to Menu</Link>
    </div>
  );
}

export default Socials;