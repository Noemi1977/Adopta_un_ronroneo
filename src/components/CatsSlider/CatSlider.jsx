import { useEffect, useState } from "react";
import axios from "axios";
import CatsCard from "../CatCard/CatCard";

const API_URL = "https://api.thecatapi.com/v1/images/search?limit=10"; 
const API_KEY = "live_xR2TUfUJM57eCOuupoNfWYtDRBDd2qxwnVrG3MiROhHTmVSsVtHXs0IbfUGeYoHQ"; 

function CatSlider() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetchCats();
  }, []);

  const fetchCats = async () => {
    try {
      const response = await axios.get(API_URL, {
        headers: { "x-api-key": API_KEY }
      });
      setCats(response.data); //guardamos los datos de la API
    } catch (error) {
      console.error("Error fetching cats:", error);
    }
  };

  return (
    <div>
      <h2>🐱 Galería de Gatos</h2>
      {/* <button onClick={fetchCats}>Cargar Nuevos Gatos</button> */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {cats.map((cat) => (
            <CatsCard key={cat.id} cat={cat}></CatsCard>
        ))}
      </div>
    </div>
  );
}

export default CatSlider;
