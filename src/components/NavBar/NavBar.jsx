import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "/Logo.png";
import { useTheme } from '../../context/ThemeContext'; // Ajusta la ruta según tu estructura

const NavBar = () => {
  const { isDarkMode } = useTheme(); // Obtener el estado del tema
  return (
    <nav className={`navbar ${isDarkMode ? 'dark-mode' : ''}`}>
    <NavLink to="/" className="logo-container">
      <img src={logo} alt="Logo" className="logo" />
    </NavLink>
    <div className="nav-links">
      <NavLink className={`nav-link ${isDarkMode ? 'dark-mode' : ''}`}
       to="/" activeclassname="active">
        Inicio
      </NavLink>
      <NavLink className={`nav-link ${isDarkMode ? 'dark-mode' : ''}`}
       to="/Adopta" activeclassname="active">
        Adopta
      </NavLink>
      <NavLink className={`nav-link ${isDarkMode ? 'dark-mode' : ''}`}
       to="/Sobrenosotros" activeclassname="active">
        Sobre Nosotros
      </NavLink>
      <NavLink className={`nav-link ${isDarkMode ? 'dark-mode' : ''}`}
      to="/Contacto" activeclassname="active">
        Contacto
      </NavLink>
      <NavLink className={`nav-link ${isDarkMode ? 'dark-mode' : ''}`}
       to="/favorites" activeClassName="active">
          Mis Favoritos
        </NavLink>
    </div>
  </nav>
);
};


export default NavBar;
