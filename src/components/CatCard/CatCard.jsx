import { useNavigate } from "react-router-dom";
import "./CatCard.css";
import { useTheme } from '../../context/ThemeContext'; 

function CatsCard({ cat, isFavorite, onToggleFavorite }) {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const handleAdoptClick = () => {
    navigate("/Contacto", { state: { cat } });
    
  };

  return (
    <div className={`cat-card ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="image-container">
        <img src={cat.url} alt="Cat" className="cat-image" />
      </div>
      <div>
        <h3>{cat.name}</h3>
        <button className="favorite-button" onClick={onToggleFavorite}>
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