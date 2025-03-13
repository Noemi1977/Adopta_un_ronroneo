import { useNavigate } from "react-router-dom";

function CatsCard({ cat }) {
  const navigate = useNavigate();

  const handleAdoptClick = () => {
    navigate("./construction.jsx"); // Redirige a la página en construcción
  };

    return (
      <div style={styles.card}>
        <img src={cat.url} alt="Cat" style={styles.image} />
        <p><strong>ID:</strong> {cat.id}</p>
        
        <button 
        onClick={handleAdoptClick} 
        style={styles.button}
      >
        Adoptar
      </button>
      </div>
    );
  }
  
  const styles = {
    card: {
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "10px",
      textAlign: "center",
      width: "220px",
      backgroundColor: "#fff",
      boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"
    },
    image: {
      width: "200px",
      borderRadius: "5px"
    }
  };
  
  export default CatsCard;