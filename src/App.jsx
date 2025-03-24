import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Inicio from "./components/pages/Inicio.jsx"
import Adopta from "./components/pages/Adopta.jsx";
import Sobrenosotros from "./components/pages/Sobrenosotros.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import CatsSlider from "./components/CatsSlider/CatSlider.jsx";
import AdoptForm from "./components/AdoptForm/AdoptForm.jsx";
import PageInConstruction from "./components/pages/PageInConstruction.jsx";
// import { ThemeContext } from "./context/ThemeContext.jsx";

function App() {
  // const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <div> 
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Sobrenosotros" element={<Sobrenosotros />} />
          <Route path="/Adopta" element={<><Adopta /><CatsSlider /></>} />
          <Route path="/Contacto" element={<AdoptForm />} />
          <Route path="/construction" element={<PageInConstruction />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>

      {/* botón de cambio de tema
      <div className="app-container">
        <h1>Adopta un Gatito 🐱</h1>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === "light" ? "🌙" : "☀️"}
        </button> */}
      {/* </div> */}
    </div>  
  );
}

export default App;