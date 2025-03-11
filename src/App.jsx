
import { Routes, Route, Navigate } from "react-router-dom";
import Inicio from "./components/pages/Inicio.jsx"; 
import Adopta from "./components/pages/Adopta.jsx"; 
import Sobrenosotros from "./components/pages/Sobrenosotros.jsx"; 
import Contacto from "./components/pages/Contacto.jsx";
import NavBar from "./components/NavBar/NavBar.jsx"


import './App.css'

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Sobrenosotros" element={<Sobrenosotros />} />
        <Route path="/Adopta" element={<Adopta />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
