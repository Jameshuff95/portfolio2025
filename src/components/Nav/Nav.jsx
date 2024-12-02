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
        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
        <NavLink to="/Projects">Projects</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
