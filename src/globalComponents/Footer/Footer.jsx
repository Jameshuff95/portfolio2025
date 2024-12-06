import './Footer.css';
import '../../index.css';
import '../../pages/Home/components/ContactInformation/ContactInformation.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div id="footer-container">
        <div id="footer-top">
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
            <Link to="#" className="footer-social">
              <i id="github" className="bi bi-github" />
              <legend>Github</legend>
            </Link>

            <Link to="#" className="footer-social">
              <i id="linkedin" className="bi bi-linkedin" />
              <legend>Linkedin</legend>
            </Link>

            <Link to="#" className="footer-social">
              <i id="facebook" className="bi bi-facebook" />
              <legend>Facebook</legend>
            </Link>

            <Link to="#" className="footer-social">
              <i id="x2" className="bi bi-twitter-x" />
              <legend>X</legend>
            </Link>

            <Link to="#" className="footer-social">
              <i id="instagram" className="bi bi-instagram" />
              <legend>Instagram</legend>
            </Link>

            <Link to="#" className="footer-social">
              <i id="reddit" className="bi bi-reddit" />
              <legend>Reddit</legend>
            </Link>
            <Link to="#" className="footer-social">
              <i id="dribbble" className="bi bi-dribbble" />
              <legend>Dribbble</legend>
            </Link>
            <Link to="#" className="footer-social">
              <i id="youtube" className="bi bi-youtube" />
              <legend>Youtube</legend>
            </Link>
            <Link to="#" className="footer-social">
              <i id="stack-overflow" className="bi bi-stack-overflow" />
              <legend>Stack Overflow</legend>
            </Link>
          </div>
        </div>
        <div id="footer-bottom">
          <p>© James Huff 2024. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
