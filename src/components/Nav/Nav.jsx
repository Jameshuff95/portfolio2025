import '../../index.css';
import '../../App.css';
import './Nav.css';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <i className="bi bi-list" onClick={toggleMenu} />
      <div id="menu" className={showMenu ? 'show' : ''}>
        <NavLink to="/" onClick={toggleMenu} className="nav-link">
          Home
        </NavLink>
        <NavLink to="/Contact" onClick={toggleMenu} className="nav-link">
          Contact
        </NavLink>
        <NavLink to="/Projects" onClick={toggleMenu} className="nav-link">
          Projects
        </NavLink>
        <NavLink to="/Certifications" onClick={toggleMenu} className="nav-link">
          Certifications
        </NavLink>
        <NavLink to="/SoftSkills" onClick={toggleMenu} className="nav-link">
          Soft Skills
        </NavLink>
        <NavLink
          to="/TechnicalSkills"
          onClick={toggleMenu}
          className="nav-link"
        >
          Technical Skills
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
