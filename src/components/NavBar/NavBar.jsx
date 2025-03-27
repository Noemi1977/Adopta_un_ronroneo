import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "/Logo.png";
import { useTheme } from '../../context/ThemeContext'; // Ajusta la ruta según tu estructura

const NavBar = () => {
  const { isDarkMode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isDarkMode ? 'dark-mode' : ''}`}>
      <NavLink to="/" className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </NavLink>

      {/* Botón de menú hamburguesa */}
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      {/* Menú de navegación */}
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <NavLink className="nav-link" to="/" activeclassname="active" onClick={closeMenu}>
          Inicio
        </NavLink>
        <NavLink className="nav-link" to="/Adopta" activeclassname="active" onClick={closeMenu}>
          Adopta
        </NavLink>
        <NavLink className="nav-link" to="/Sobrenosotros" activeclassname="active" onClick={closeMenu}>
          Sobre Nosotros
        </NavLink>
        <NavLink className="nav-link" to="/Contacto" activeclassname="active" onClick={closeMenu}>
          Contacto
        </NavLink>
        <NavLink className="nav-link" to="/favorites" activeClassName="active" onClick={closeMenu}>
          Mis Favoritos
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
