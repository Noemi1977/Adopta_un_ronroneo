import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "/Logo.png";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </NavLink>

      {/* Botón hamburguesa */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Enlaces de navegación */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <NavLink className="nav-link" to="/" activeclassname="active" onClick={() => setMenuOpen(false)}>
          Inicio
        </NavLink>
        <NavLink className="nav-link" to="/Adopta" activeclassname="active" onClick={() => setMenuOpen(false)}>
          Adopta
        </NavLink>
        <NavLink className="nav-link" to="/Sobrenosotros" activeclassname="active" onClick={() => setMenuOpen(false)}>
          Sobre Nosotros
        </NavLink>
        <NavLink className="nav-link" to="/Contacto" activeclassname="active" onClick={() => setMenuOpen(false)}>
          Contacto
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
