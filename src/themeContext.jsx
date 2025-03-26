
import React, {createContext, useState } from "react";

// Creo el contexto
const ThemeContext = createContext();
// Creamos el proveedor del contecxt
export const ThemeProvider = ({ children }) => {
    // El tema de inicio ese claro
  const [theme, setTheme] = useState("light");
 
//  Funcion para cambiar los temas
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    // Proporciona el estado a todos los hijos de este componente
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
