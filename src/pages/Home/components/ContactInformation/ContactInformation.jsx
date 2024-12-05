import { Link } from 'react-router-dom';
import './ContactInformation.css';

const ContactInformation = () => {
  return (
    <div id="social-links-container" className="container">
      <div id="social-links">
        <Link to="#">
          <i className="bi bi-github" />
        </Link>

        <Link to="#">
          <i id="linkedin" className="bi bi-linkedin" />
        </Link>

        <Link to="#">
          <i id="facebook" className="bi bi-facebook" />
        </Link>

        <Link to="#">
          <i id="x" className="bi bi-twitter-x" />
        </Link>

        <Link to="#">
          <i id="instagram" className="bi bi-instagram" />
        </Link>

        <Link to="#">
          <i id="reddit" className="bi bi-reddit" />
        </Link>
      </div>
    </div>
  );
};

export default ContactInformation;
