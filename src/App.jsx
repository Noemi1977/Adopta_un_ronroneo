import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Inicio from "./components/pages/Inicio.jsx"
import Adopta from "./components/pages/Adopta.jsx";
import Sobrenosotros from "./components/pages/Sobrenosotros.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import CatsSlider from "./components/CatsSlider/CatSlider.jsx";
import AdoptForm from "./components/AdoptForm/AdoptForm.jsx";
import PageInConstruction from "./components/pages/PageInConstruction.jsx";
import FavoritesPage from "./components/Favorites/FavoritesPage.jsx";
import { ThemeContext } from "./themeContext";
import { themes } from "./themeStyles";
import ToggleThemeButton from "./components/Button/ToggleThemeButton.jsx";

const App = () => {
  // Consumir el contexto
  const { theme } = useContext(ThemeContext);

  // Obtener los estilos del tema actual
  const currentTheme = themes[theme];

  return (
    <div
      style={{
        backgroundColor: currentTheme.backgroundColor,
        color: currentTheme.textColor,
        padding: "20px",
        minHeight: "100vh",
      }}
    >
      <h1>Aplicación con Dark Theme</h1>
      <p>Este es un ejemplo de una aplicación con soporte para temas.</p>
      <ToggleThemeButton />
      
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Sobrenosotros" element={<Sobrenosotros />} />
        <Route path="/Adopta" element={<><Adopta /><CatsSlider /></>} />
        <Route path="/Contacto" element={<AdoptForm />} />
        <Route path="/construction" element={<PageInConstruction />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>

    </div>
  );
};

export default App;