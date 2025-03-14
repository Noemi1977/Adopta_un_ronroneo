import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "/Logo.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo-link">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </NavLink>

      <NavLink
        className="nav-link"
        to="/"
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
        })}
      >
        Inicio
      </NavLink>

      <NavLink
        className="nav-link"
        to="/Adopta"
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
        })}
      >
        Adopta
      </NavLink>

      <NavLink
        className="nav-link"
        to="/Sobrenosotros"
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
        })}
      >
        Sobre Nosotros
      </NavLink>

      <NavLink
        className="nav-link"
        to="/Contacto"
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
        })}
      >
        Contacto
      </NavLink>
    </nav>
  );
};

export default NavBar;
