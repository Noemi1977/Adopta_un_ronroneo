import { useState, useEffect } from "react";
import CatsCard from "../CatCard/CatCard";
// import "./FavoritesPage.css";

function FavoritesPage() {
  const [favoriteCats, setFavoriteCats] = useState([]);

  useEffect(() => {
    const allFavorites = JSON.parse(localStorage.getItem("favorites")) || {}; // Manejo de null
    const favoriteIds = Object.keys(allFavorites).filter(id => allFavorites[id]);

    const allCats = JSON.parse(localStorage.getItem("allCats")) || []; // Manejo de null
    const filteredCats = allCats.filter(cat => favoriteIds.includes(cat.id));

    setFavoriteCats(filteredCats);
  }, []);

  return (
    <div className="favorites-container">
      <h2>Gatitos Favoritos 🐱💖</h2>
      {favoriteCats.length > 0 ? (
        <div className="favorites-grid">
          {favoriteCats.map(cat => (
            <CatsCard key={cat.id} cat={cat} />
          ))}
        </div>
      ) : (
        <p>No tienes gatos favoritos aún. ¡Añade algunos! 😺</p>
      )}
    </div>
  );
}

export default FavoritesPage;
