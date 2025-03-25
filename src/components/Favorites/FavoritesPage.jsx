import React from "react";
import { Link } from "react-router-dom";

const FavoritesPage = () => {
  // Obtener los datos de los gatos almacenados en el localStorage
  const storedCats = JSON.parse(localStorage.getItem("catsData")) || [];
  
  // Obtener los IDs favoritos
  const favorites = JSON.parse(localStorage.getItem("favorites")) || {};

  // Filtrar los gatos que están marcados como favoritos
  const favoriteCats = storedCats.filter((cat) => favorites[cat.id]);

  return (
    <div className="favorites-page">
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