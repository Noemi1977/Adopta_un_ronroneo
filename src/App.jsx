
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Inicio from "./components/pages/Inicio.jsx"; 
import Adopta from "./components/pages/Adopta.jsx"; 
import Sobrenosotros from "./components/pages/Sobrenosotros.jsx"; 
import Contacto from "./components/pages/Contacto.jsx";
import NavBar from "./components/NavBar/NavBar.jsx"
import CatsSlider from "./components/CatsSlider/CatSlider";
import CatsCard from "./components/CatCard/CatCard";
import App from "../App";
import PageInConstruction from "../pages/PageInConstruction"; // Crea esta página




function App() {
 

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Sobrenosotros" element={<Sobrenosotros />} />
        <Route path="/Adopta" element={<Adopta />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/construction" element={<PageInConstruction />} />
        <Route path="*" element={<Navigate to="/" />} />
        
      </Routes>
      <div>
      <h1>Adopta un ronroneo</h1>
      <CatsSlider></CatsSlider>
      <Router>
      <Routes>
        <Route path="/" element={<App />} />
       
      </Routes>
    </Router>

    </div>
    </>
  );
};

export default App;
