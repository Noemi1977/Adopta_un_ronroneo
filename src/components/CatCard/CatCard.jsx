import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import "./CatCard.css";
import { useTheme } from '../../context/ThemeContext';

function favoriteReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_FAVORITE":
      return { ...state, isFavorite: !state.isFavorite };
    default:
      throw new Error(`Acción desconocida: ${action.type}`);
  }
}

function CatsCard({ cat, isFavorite: initialIsFavorite, onToggleFavorite }) {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const [state, dispatch] = useReducer(favoriteReducer, {
    isFavorite: initialIsFavorite, 
  });
    const { isFavorite } = state;

  const handleAdoptClick = () => {
    navigate("/Contacto", { state: { cat } });
  };


  const handleToggleFavorite = () => {
    dispatch({ type: "TOGGLE_FAVORITE" }); 
    onToggleFavorite(); // Llama a la función externa pasada como prop
  };

  return (
    <div className={`cat-card ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="image-container">
        <img src={cat.url} alt="Cat" className="cat-image" />
      </div>
      <div>
        <h3>{cat.name}</h3>
        <button className="favorite-button" onClick={handleToggleFavorite}>
          {isFavorite ? "💚" : "🤍"}
        </button>
        <p>{cat.temperament}</p>
      </div>

      <div>
        <button className="adopt-button" onClick={handleAdoptClick}>
          Adoptar
        </button>
      </div>
    </div>
  );
}

export default CatsCard;