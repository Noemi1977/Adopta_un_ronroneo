import { useEffect, useState } from "react";
import CatsCard from "../CatCard/CatCard";
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
    console.log("Estado de favoritos actualizado:", newFavorites);
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
    <div className="slider-container">
      <button onClick={preCard} disabled={slider === 0} className="slider-button">
        ◀
      </button>

      <div className="cards-container">
        {cats.slice(slider, slider + nCard).map((cat) => (
          <CatsCard
            key={cat.id}
            cat={cat}
            isFavorite={!!favorites[cat.id]}
            onToggleFavorite={() => handleFavoriteChange(cat.id)}
          />
        ))}
      </div>

      <button
        onClick={nextCard}
        disabled={slider + nCard >= cats.length}
        className="slider-button"
      >
        ▶
      </button>
    </div>
  );
}

export default CatSlider;