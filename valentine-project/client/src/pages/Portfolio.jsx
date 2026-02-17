import { Link } from 'react-router-dom';

function Portfolio() {
  return (
    <div className="mc-panel">
      <h2 className="mc-title">Portfolio & Edu</h2>
      
      <div className="project-card">
        <h3>Education</h3>
        <p>Bachelor of Science in Information Technology</p>
      </div>

      <div className="project-card">
        <h3>Projects</h3>
        <p><strong>Valentine App:</strong> Fullstack React + NestJS app.</p>
      </div>

      <Link to="/" className="back-link">Back to Menu</Link>
    </div>
  );
}

export default Portfolio;