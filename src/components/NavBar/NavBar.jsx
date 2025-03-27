import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "/Logo.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </NavLink>
      <div className="nav-links">
        <NavLink 
          className={({ isActive }) => 
            `nav-link ${isActive ? 'active' : ''}`
          } 
          to="/"
        >
          Inicio
        </NavLink>
        <NavLink 
          className={({ isActive }) => 
            `nav-link ${isActive ? 'active' : ''}`
          } 
          to="/Adopta"
        >
          Adopta
        </NavLink>
        <NavLink 
          className={({ isActive }) => 
            `nav-link ${isActive ? 'active' : ''}`
          } 
          to="/Sobrenosotros"
        >
          Sobre Nosotros
        </NavLink>
        <NavLink 
          className={({ isActive }) => 
            `nav-link ${isActive ? 'active' : ''}`
          } 
          to="/Contacto"
        >
          Contacto
        </NavLink>
        <NavLink 
          className={({ isActive }) => 
            `nav-link ${isActive ? 'active' : ''}`
          } 
          to="/favorites"
        >
          Mis Favoritos
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;