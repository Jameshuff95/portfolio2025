import '../../index.css';
import '../../App.css';
import './Nav.css';

import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

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
      const navLinks = document.querySelectorAll('.nav-link');
      if (window.innerWidth > 500) {
        navLinks.forEach((link) => {
          link.onclick = null;
        });
        if (showMenu) {
          setShowMenu(false); // Hide menu when resizing to a larger screen
        }
      } else {
        navLinks.forEach((link) => {
          link.onclick = toggleMenu;
        });
      }
    };

    // Run the handleResize function initially to set the correct onClick handlers
    handleResize();

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [showMenu]);

  return (
    <nav>
      <i
        id="themeBtn"
        className={`bi bi-${theme === 'dark' ? 'moon' : 'sun'}-fill`}
        ref={themeBtnRef}
      />
      <i className="bi bi-list" onClick={toggleMenu} />

      <div id="menu" className={showMenu ? 'show' : ''}>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/About" className="nav-link">
          About
        </NavLink>
        <NavLink to="/Blog" className="nav-link">
          Blog
        </NavLink>
        <NavLink to="/Contact" className="nav-link">
          Contact
        </NavLink>
        <NavLink to="/Portfolio" className="nav-link">
          Portfolio
        </NavLink>
        <NavLink to="/Resume" className="nav-link">
          Resume
        </NavLink>
        <NavLink to="/Services" className="nav-link">
          Services
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
