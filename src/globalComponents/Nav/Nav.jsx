import '../../index.css';
import '../../App.css';
import './Nav.css';

import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState('dark');

  const themeBtnRef = useRef(null);

  useEffect(() => {
    const themeBtn = themeBtnRef.current;

    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    if (themeBtn) {
      themeBtn.addEventListener('click', toggleTheme);
    }

    return () => {
      if (themeBtn) {
        themeBtn.removeEventListener('click', toggleTheme);
      }
    };
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 500) {
        setShowMenu(false); // Hide menu when resizing to a larger screen
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav>
      <i
        id="themeBtn"
        className={`bi bi-${theme === 'dark' ? 'moon' : 'sun'}-fill`}
        ref={themeBtnRef}
      />
      <i id="menu-btn" className="bi bi-list" onClick={toggleMenu} />

      <Modal
        show={showMenu}
        onHide={toggleMenu}
        dialogClassName={`modal-${theme}`} // Dynamically set className for theme
      >
        <Modal.Header closeButton>
          <Modal.Title>Explore my website!</Modal.Title>
        </Modal.Header>
        <Modal.Body className={`modal-${theme}`}>
          <NavLink to="/" className="nav-link" onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="/About" className="nav-link" onClick={toggleMenu}>
            About
          </NavLink>
          <NavLink to="/Blog" className="nav-link" onClick={toggleMenu}>
            Blog
          </NavLink>
          <NavLink to="/Contact" className="nav-link" onClick={toggleMenu}>
            Contact
          </NavLink>
          <NavLink to="/Portfolio" className="nav-link" onClick={toggleMenu}>
            Portfolio
          </NavLink>
          <NavLink to="/Resume" className="nav-link" onClick={toggleMenu}>
            Resume
          </NavLink>
          <NavLink to="/Services" className="nav-link" onClick={toggleMenu}>
            Services
          </NavLink>
        </Modal.Body>
        <Modal.Footer className={`modal-${theme}`}>
          <Button variant="secondary" onClick={toggleMenu}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </nav>
  );
};

export default Nav;
