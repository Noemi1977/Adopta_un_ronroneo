
import React, { useContext } from "react";
import { ThemeContext } from "../../themeContext.jsx";

const ToggleThemeButton = () => {
  // Consumir el contexto
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Cambiar a modo {theme === "light" ? "oscuro" : "claro"}
    </button>
  );
};

export default ToggleThemeButton;
