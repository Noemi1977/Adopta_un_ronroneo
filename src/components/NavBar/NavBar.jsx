import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
        <NavLink
        className="nav-link"
          to="/"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Inicio
        </NavLink>
        {" | "}
        <NavLink
        className="nav-link"
          to="/Adopta"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Adopta
        </NavLink>
        {" | "}
        <NavLink
        className="nav-link"
          to="/Sobrenosotros"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Sobre Nosotros
        </NavLink>
        {" | "}
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
