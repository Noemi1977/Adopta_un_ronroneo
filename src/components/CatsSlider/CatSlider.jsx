import { useEffect, useState } from "react";
import SliderContainer from "../Slider/Slider";
import { fetchCats } from "../../services/catService";
import "./CatSlider.css";

function CatSlider() {
  const [cats, setCats] = useState([]);
  const [slider, setSlider] = useState(0);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || {}
  );

  useEffect(() => {
    const getCats = async () => {
      const catsData = await fetchCats();
      setCats(catsData);
    };

    getCats();
  }, []);

  // Función para manejar cambios en favoritos
  const handleFavoriteChange = (id) => {
    const newFavorites = { ...favorites, [id]: !favorites[id] };
    setFavorites(newFavorites); // Actualiza el estado local
    localStorage.setItem("favorites", JSON.stringify(newFavorites)); // Guarda en localStorage
    // console.log("favoritos:", newFavorites);
  };

  const nCard = 7; 

  const nextCard = () => {
    if (slider + nCard < cats.length) {
      setSlider(slider + 1);
    }
  };

  const preCard = () => {
    if (slider > 0) {
      setSlider(slider - 1);
    }
  };

  return (
    <SliderContainer
      cats={cats.map((cat) => ({ ...cat, isFavorite: favorites[cat.id] }))}
      slider={slider}
      nCard={nCard}
      onToggleFavorite={handleFavoriteChange}
      preCard={preCard}
      nextCard={nextCard}
    />
  );
}

export default CatSlider;