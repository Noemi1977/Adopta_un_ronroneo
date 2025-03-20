import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "/Logo.png";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo a la izquierda */}
      <NavLink to="/" className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </NavLink>

      {/* Botón de menú hamburguesa para pantallas pequeñas */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Links de navegación a la derecha */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/">
          Inicio
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/Adopta">
          Adopta
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/Favoritos">
          Gatos Favoritos
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/Sobrenosotros">
          Sobre Nosotros
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/Contacto">
          Contacto
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
