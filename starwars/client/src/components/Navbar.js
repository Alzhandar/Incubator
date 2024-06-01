import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import homeIcon from '../assets/lightsaber 2.png';
import planetsIcon from '../assets/galaxy 2.png';
import charactersIcon from '../assets/droid 2.png';
import starshipsIcon from '../assets/aircraft 2.png';
import logo from '../assets/LogoStarWars.png';

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="navbar">
      <ul className="menu">
        <li>
          <Link to="/">
            <img src={homeIcon} alt="Home" className="icon" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/planets">
            <img src={planetsIcon} alt="Planets" className="icon" />
            Planets
          </Link>
        </li>
        <li>
          <Link to="/characters">
            <img src={charactersIcon} alt="Characters" className="icon" />
            Characters
          </Link>
        </li>
        <li>
          <Link to="/starships">
            <img src={starshipsIcon} alt="Starships" className="icon" />
            Starships
          </Link>
        </li>
      </ul>
      {location.pathname === '/' && (
        <div className="content">
          <img src={logo} alt="Logo" className="logo"/>
          <p className="text">Welcome to Star Wars website!</p>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
