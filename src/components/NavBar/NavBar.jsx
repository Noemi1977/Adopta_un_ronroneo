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
      <NavLink className="nav-link" to="/Adopta" activeclassname="active">
        Adopta
      </NavLink>
      <NavLink className="nav-link" to="/Favoritos" activeclassname="active">
        Gatos Favoritos
      </NavLink>
      <NavLink className="nav-link" to="/Sobrenosotros" activeclassname="active">
        Sobre Nosotros
      </NavLink>
      <NavLink className="nav-link" to="/Contacto" activeclassname="active">
        Contacto
      </NavLink>
  </nav>
);
};

export default NavBar;
