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
    console.log(theme);
  }, [theme]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <i
        id="themeBtn"
        className={`bi bi-${theme === 'dark' ? 'moon' : 'sun'}-fill`}
        ref={themeBtnRef}
      />
      <i className="bi bi-list" onClick={toggleMenu} />
      {/*prettier-ignore*/}
      <div id="menu" className={showMenu ? 'show' : ''}>
        <NavLink to="/" onClick={toggleMenu} className="nav-link">Home</NavLink>
        <NavLink to="/Contact" onClick={toggleMenu} className="nav-link">Contact</NavLink>
        <NavLink to="/Projects" onClick={toggleMenu} className="nav-link">Projects</NavLink>
        <NavLink to="/Certifications" onClick={toggleMenu} className="nav-link">Certifications</NavLink>
        <NavLink to="/SoftSkills" onClick={toggleMenu} className="nav-link">Soft Skills</NavLink>
        <NavLink to="/TechnicalSkills" onClick={toggleMenu} className="nav-link">Technical Skills</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
