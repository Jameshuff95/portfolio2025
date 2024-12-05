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
          <Link to="#">
            <i id="github" className="bi bi-github" />
          </Link>

          <Link to="#">
            <i id="linkedin" className="bi bi-linkedin" />
          </Link>

          <Link to="#">
            <i id="facebook" className="bi bi-facebook" />
          </Link>

          <Link to="#">
            <i id="x2" className="bi bi-twitter-x" />
          </Link>

          <Link to="#">
            <i id="instagram" className="bi bi-instagram" />
          </Link>

          <Link to="#">
            <i id="reddit" className="bi bi-reddit" />
          </Link>
          <Link to="#">
            <i id="dribbble" className="bi bi-dribbble" />
          </Link>
          <Link to="#">
            <i id="youtube" className="bi bi-youtube" />
          </Link>
          <Link to="#">
            <i id="stack-overflow" className="bi bi-stack-overflow" />
          </Link>
        </div>
      </div>
      <p>© James Huff 2024. All rights reserved.</p>
    </>
  );
};

export default Footer;
