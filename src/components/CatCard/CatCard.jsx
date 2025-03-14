import { useNavigate } from "react-router-dom";
import "./CatCard.css"; 

function CatsCard({ cat }) {
  const navigate = useNavigate();

  const handleAdoptClick = () => {
    navigate("/construction"); // Redirige a la página en construcción
  };
  if (!cat) {
    return <div>No hay información del gato disponible.</div>;
  }
    return (
      <div>
        <div className="cat-card">
          <img src={cat.url} alt="Cat" className="cat-image" />
        </div>
        
        <div>
          
            <button className="button-container"
          onClick={handleAdoptClick} 
        >
          Adoptar
          </button>
        
        </div>
      </div>
    );
  }
  
  export default CatsCard;
  
  
