
import { Routes, Route, Navigate } from "react-router-dom";
import Inicio from "./pages/Inicio"; 
import Adopta from "./pages/Adopta"; 
import Sobrenosotros from "./pages/Sobrenosotros"; 
import Contacto from "./pages/Contacto";

import './App.css'

const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/Adopta" element={<Adopta />} />
      <Route path="/Sobrenosotros" element={<Sobrenosotros />} />
      <Route path="/Contacto" element={<Contacto />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    
  )
}

export default App
