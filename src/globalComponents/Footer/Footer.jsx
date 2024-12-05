import './Footer.css';
import '../../index.css';
import '../../pages/Home/components/ContactInformation/ContactInformation.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div id="footer-container">
        <div id="site-map">
          <Link className="footer-link">Home</Link>
          <Link className="footer-link">About</Link>
          <Link className="footer-link">Blog</Link>
          <Link className="footer-link">Contact</Link>
          <Link className="footer-link">Portfolio</Link>
          <Link className="footer-link">Resume</Link>
          <Link className="footer-link">Services</Link>
        </div>

        <div id="footer-social-links">
          <Link to="#" className="footer-social-link">
            <i id="github" className="bi bi-github" />
          </Link>

          <Link to="#" className="footer-social-link">
            <i id="linkedin" className="bi bi-linkedin" />
          </Link>

          <Link to="#" className="footer-social-link">
            <i id="facebook" className="bi bi-facebook" />
          </Link>

          <Link to="#" className="footer-social-link">
            <i id="x2" className="bi bi-twitter-x" />
          </Link>

          <Link to="#" className="footer-social-link">
            <i id="instagram" className="bi bi-instagram" />
          </Link>

          <Link to="#" className="footer-social-link">
            <i id="reddit" className="bi bi-reddit" />
          </Link>
        </div>
      </div>
      <p>© James Huff 2024. All rights reserved.</p>
    </>
  );
};

export default Footer;
