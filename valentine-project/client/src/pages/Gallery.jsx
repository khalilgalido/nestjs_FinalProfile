import { Link } from 'react-router-dom';

// Importing your existing assets
import img1 from '../assets/her1.png';
import img2 from '../assets/me1.png';
import img3 from '../assets/us1.png';
import img4 from '../assets/us2.png';

function Gallery() {
  const photos = [img1, img2, img3, img4];

  return (
    <div className="mc-panel">
      <h2 className="mc-title">Gallery</h2>
      <div className="gallery-grid">
        {photos.map((pic, index) => (
          <div key={index} className="frame">
            <img src={pic} alt="memory" />
          </div>
        ))}
      </div>
      <Link to="/" className="back-link">Back to Menu</Link>
    </div>
  );
}

export default Gallery;