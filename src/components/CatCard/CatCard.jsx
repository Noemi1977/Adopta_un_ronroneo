import { useNavigate } from "react-router-dom";
import "./CatCard.css"; 


function CatsCard({ cat }) {
  const navigate = useNavigate();

  const handleAdoptClick = () => {
    navigate("/adoptar"); // Redirige a la página en construcción
  };
  if (!cat) {
    return <div>No hay información del gato disponible.</div>;
  }
    return (
      <div className="cat-card">
        <div className="image-container">
          <img src={cat.url} alt="Cat" className="cat-image" />
        </div>
        
        <div>
          
            <button className="adopt-button"
          onClick={handleAdoptClick} 
        >
          Adoptar
          </button>
        
        </div>
      </div>
    );
  }
  
  export default CatsCard;
  
  
