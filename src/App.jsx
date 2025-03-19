
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Inicio from "./components/pages/Inicio.jsx"; 
import Adopta from "./components/pages/Adopta.jsx"; 
import Sobrenosotros from "./components/pages/Sobrenosotros.jsx"; 
import Contacto from "./components/pages/Contacto.jsx";
import NavBar from "./components/NavBar/NavBar.jsx"
import CatsSlider from "./components/CatsSlider/CatSlider";
// import CatsCard from "./components/CatCard/CatCard";
// import ListadoCat from "./components/Listado/ListadoCat.jsx";
import PageInConstruction from "./components/pages/PageInConstruction.jsx"; // Crea esta página

function App() {
 
  return (
    
    <>
    {/* <ListadoCat></ListadoCat> */}
      <NavBar />
      <Routes>
      <Route path="/" element={<><Inicio /></>} />


        <Route path="/Sobrenosotros" element={<Sobrenosotros />} />
        <Route path="/Adopta" element={<><Adopta /><CatsSlider /></>} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/construction" element={<PageInConstruction />} />


        <Route path="*" element={<Navigate to="/" />} />
        
      </Routes>
     
    </>
  );
};

export default App;
