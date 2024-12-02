import '../../index.css';
import '../../App.css';
import './Nav.css';

import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <NavLink to="/Home">Home</NavLink>
      <NavLink to="/About">About</NavLink>
      <NavLink to="/Contact">Contact</NavLink>
      <NavLink to="/Projects">Projects</NavLink>
    </nav>
  );
};

export default Nav;
