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
      <NavLink className="nav-link" to="/" activeclassname="active">
        Inicio
      </NavLink>
      <NavLink className="nav-link" to="/Adopta" activeclassname="active">
        Adopta
      </NavLink>
      <NavLink className="nav-link" to="/Sobrenosotros" activeclassname="active">
        Sobre Nosotros
      </NavLink>
      <NavLink className="nav-link" to="/Contacto" activeclassname="active">
        Contacto
      </NavLink>
      <NavLink className="nav-link" to="/favorites" activeClassName="active">
          Mis Favoritos
        </NavLink>
    </div>
  </nav>
);
};


export default NavBar;
