// no importamos nada porque es un cmponete de presentacion y recibe los datos por props y toma los datos de CatsSlider
function CatsCard({ cat }) {
    return (
      <div style={styles.card}>
        <img src={cat.url} alt="Cat" style={styles.image} />
        <p><strong>ID:</strong> {cat.id}</p>
        
        <button style={{ marginTop: "10px", padding: "5px 10px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "5px" }}>
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