import { Link } from 'react-router-dom';
import './ContactInformation.css';
import '../../../../globalComponents/Footer/Footer.css';
import '../../../../index.css';

const ContactInformation = () => {
  return (
    <div id="social-links-container" className="container">
      <h3 className="card-title">Contact Me</h3>
      <div id="social-links">
        <Link to="#" className="contact-social">
          <i id="github" className="bi bi-github" />
          <legend>Github</legend>
        </Link>

        <Link to="#" className="contact-social">
          <i id="linkedin" className="bi bi-linkedin" />
          <legend>Linkedin</legend>
        </Link>

        <Link to="#" className="contact-social">
          <i id="facebook" className="bi bi-facebook" />
          <legend>Facebook</legend>
        </Link>

        <Link to="#" className="contact-social">
          <i id="instagram" className="bi bi-instagram" />
          <legend>Instagram</legend>
        </Link>

        <Link to="#" className="contact-social">
          <i id="reddit" className="bi bi-reddit" />
          <legend>Reddit</legend>
        </Link>

        <Link to="#" className="contact-social">
          <i id="dribbble" className="bi bi-dribbble" />
          <legend>Dribbble</legend>
        </Link>

        <Link to="#" className="contact-social">
          <i id="youtube" className="bi bi-youtube" />
          <legend>Youtube</legend>
        </Link>

        <Link to="#" className="contact-social">
          <i id="stack-overflow" className="bi bi-stack-overflow" />
          <legend>Stack Overflow</legend>
        </Link>

        <Link to="#" className="contact-social">
          <i id="x2" className="bi bi-twitter-x" />
          <legend>X</legend>
        </Link>
        
      </div>
    </div>
  );
};

export default ContactInformation;
