import React from "react";
import SliderContainer from "../Slider/Slider"; 
const FavoritesPage = () => {
  const storedCats = JSON.parse(localStorage.getItem("catsData")) || [];
  const favorites = JSON.parse(localStorage.getItem("favorites")) || {};

  const favoriteCats = storedCats
    .filter((cat) => favorites[cat.id])
    .map((cat) => ({ ...cat, isFavorite: true }));

  const [slider, setSlider] = React.useState(0);

  const nCard = 5;

  const nextCard = () => {
    if (slider + nCard < favoriteCats.length) {
      setSlider(slider + 1);
    }
  };

  const preCard = () => {
    if (slider > 0) {
      setSlider(slider - 1);
    }
  };

  // Función para manejar cambios en favoritos
  const handleFavoriteChange = (id) => {
    const newFavorites = { ...favorites, [id]: !favorites[id] };
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    window.location.reload(); // Recarga la página para reflejar los cambios
  };

  return (
    <div className="favorites-page">
      <h1>Mis Favoritos</h1>
      {favoriteCats.length === 0 ? (
        <p>No has marcado ningún gato como favorito.</p>
      ) : (
        <SliderContainer
          cats={favoriteCats}
          slider={slider}
          nCard={nCard}
          onToggleFavorite={handleFavoriteChange}
          preCard={preCard}
          nextCard={nextCard}
        />
      )}
    </div>
  );
};

export default FavoritesPage;