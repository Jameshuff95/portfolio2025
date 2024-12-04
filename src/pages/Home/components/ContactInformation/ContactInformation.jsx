import { Link } from 'react-router-dom';
import './ContactInformation.css';

const ContactInformation = () => {
  return (
    <div className="container">
      <h3>Get in touch with me!</h3>
      <div id="social-links">
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
          <i id="snapchat" className="bi bi-snapchat" />
        </Link>
      </div>
      <p>Feel free to contact me on any of these social media platforms!</p>
    </div>
  );
};

export default ContactInformation;
