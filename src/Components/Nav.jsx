import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../index.css';
import '../App.css';
import '../Components/Nav.jsx';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState('light');

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
        setShowMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getPageName = (path) => {
    switch (path) {
      case '/':
        return 'Home';
      case '/About':
        return 'About Me';
      case '/Blog':
        return 'My Blog';
      case '/Contact':
        return 'Contact Me';
      case '/Portfolio':
        return 'Portfolio';
      case '/Resume':
        return 'Resumé';
      case '/Services':
        return 'Services';
      default:
        return 'Page';
    }
  };

  const currentPage = getPageName(location.pathname);

  return (
    <nav>
      <i
        id="themeBtn"
        className={`bi bi-${theme === 'dark' ? 'moon' : 'sun'}-fill`}
        ref={themeBtnRef}
      />
      <h3 id="page-title">{currentPage}</h3>
      <i id="menu-btn" className="bi bi-list" onClick={toggleMenu} />
      <Modal
        show={showMenu}
        onHide={toggleMenu}
        dialogClassName={`modal-${theme}`}
      >
        <Modal.Header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Modal.Title>Explore my website!</Modal.Title>
          <Button
            variant="secondary"
            onClick={toggleMenu}
            style={{ border: '5px solid var(--card-bg)' }}
          >
            X
          </Button>
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
            Resumé
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
