import "./CatCard.css";

function CatsCard({ cat }) {
  return (
    <div className="cat-card">
      <div className="image-container">
        <img src={cat.url} alt="Cat" className="cat-image" />
      </div>

      <p><strong>ID:</strong> {cat.id}</p>

      <div className="button-container">
        <button className="adopt-button">Adoptar</button>
      </div>
    </div>
  );
}

export default CatsCard;
