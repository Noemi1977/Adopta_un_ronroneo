import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink
        to="/"
        style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}
      >
        Inicio
      </NavLink>
      {" | "}
      <NavLink
        to="/Adopta"
        style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}
      >
        Adopta
      </NavLink>
      <NavLink
        to="/SobreNosotros"
        style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}
      >
        SobreNosotros
      </NavLink>
      <NavLink
        to="/Contacto"
        style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}
      >
        Contacto
      </NavLink>
    </nav>
  );
};

export default NavBar;
