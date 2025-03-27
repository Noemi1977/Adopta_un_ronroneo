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
import ThemeToggle from './components/DarkTheme/ThemeToggle.jsx';
import './App.css';
import { ThemeProvider } from "./context/ThemeContext"; // Importar el ThemeProvider


const App = () => {
 
  return (
    <ThemeProvider>
    <div>
      <ThemeToggle/>
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
    </ThemeProvider>
  );
};

export default App;