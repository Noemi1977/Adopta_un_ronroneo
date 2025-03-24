import React from "react";
import { Link } from "react-router-dom";

const FavoritesPage = () => {
  const storedCats = JSON.parse(localStorage.getItem("catsData")) || [];
  const favorites = JSON.parse(localStorage.getItem("favorites")) || {};

  // Filtrar los gatos que están marcados como favoritos
  const favoriteCats = storedCats.filter((cat) => favorites[cat.id]);

  return (
    <div>
      <h1>Mis Favoritos</h1>
      {favoriteCats.length === 0 ? (
        <p>No has marcado ningún gato como favorito.</p>
      ) : (
        <div className="favorites-container">
          {favoriteCats.map((cat) => (
            <div key={cat.id} className="favorite-card">
              <img src={cat.url} alt={cat.name} className="cat-image" />
              <h3>{cat.name}</h3>
              <p>{cat.temperament}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;