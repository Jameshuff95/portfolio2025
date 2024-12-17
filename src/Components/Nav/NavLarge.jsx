import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import '../../index.css';
import '../../App.css';
import './Nav.jsx';

const NavLarge = () => {
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
        border: '1px solid red',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 1rem',
        position: 'fixed',
        Zindex: '10',
        background: 'var(--nav-bg)',
        height: '10vh',
        fontSize: '1.75rem',
      }}
    >
      <i
        id="themeBtn"
        className={`bi bi-${theme === 'dark' ? 'moon' : 'sun'}-fill`}
        ref={themeBtnRef}
      />
      <Nav style={{ gap: '.5rem' }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Blog">Blog</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
        <NavLink to="/Portfolio">Portfolio</NavLink>
        <NavLink to="/Resume">Resumé</NavLink>
        <NavLink to="/Services">Services</NavLink>
      </Nav>
    </Navbar>
  );
};

export default NavLarge;
