// import { createContext, useState, useEffect } from "react";



// export const ThemeContext = createContext();

// // Creamos el proveedor del contexto
// export function ThemeProvider({ children }) {
//   const storedTheme = localStorage.getItem("theme") || "light";
//   const [theme, setTheme] = useState(storedTheme);

//   // Aplicamos el tema en el <body> cuando cambia el estado
//   useEffect(() => {
//     document.body.className = theme;
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   // Función para alternar el tema
//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };
//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme}}>
//     {children}
//     </ThemeContext.Provider>
//   );
// }

