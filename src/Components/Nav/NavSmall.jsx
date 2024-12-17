import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Modal, Button, Card, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import '../../index.css';
import '../../App.css';

const NavSmall = () => {
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

    const handleResize = () => {
      if (window.innerWidth > 500) {
        setShowMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (themeBtn) {
        themeBtn.removeEventListener('click', toggleTheme);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

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
    <Navbar
      id="nav"
      className={`navbar-${theme}`}
      style={{
        borderBottom: 'var(--card-text)',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem 0',
        position: 'fixed',
        Zindex: '10',
        background: 'var(--nav-bg)',
        height: '10vh',
        borderBottom: '1px solid var(--card-text)',
      }}
    >
      <i
        id="themeBtn"
        className={`bi bi-${theme === 'dark' ? 'moon' : 'sun'}-fill`}
        style={{
          color: theme === 'dark' ? 'lightblue' : 'gold',
        }}
        ref={themeBtnRef}
      />

      <Card.Title>{currentPage}</Card.Title>
      <i
        id="menu-btn"
        className="bi bi-list"
        onClick={toggleMenu}
        style={{ color: 'var(--card-text-alt)' }}
      />

      <Modal
        show={showMenu}
        onHide={toggleMenu}
        dialogClassName={`modal-${theme}`}
      >
        <Modal.Header
          className="d-flex justify-content-between"
          style={{
            color: 'var(--modal-header-text)',
            background: 'var(--modal-header-bg)',
          }}
        >
          <Modal.Title>Explore my website!</Modal.Title>
          <Button
            variant="secondary"
            onClick={toggleMenu}
            className="border-custom"
          >
            X
          </Button>
        </Modal.Header>

        <Modal.Body
          className={`modal-${theme}`}
          style={{
            height: 'calc(100vh - 25vh)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            fontSize: '1.5rem',
          }}
        >
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
    </Navbar>
  );
};

export default NavSmall;
