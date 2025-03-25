import React from "react";
import CatsCard from "../CatCard/CatCard";

function SliderContainer({ cats, slider, nCard, onToggleFavorite, preCard, nextCard }) {
  return (
    <div className="slider-container">
      <button onClick={preCard} disabled={slider === 0} className="slider-button">
        ◀
      </button>

      <div className="cards-container">
        {cats.slice(slider, slider + nCard).map((cat) => (
          <CatsCard
            key={cat.id}
            cat={cat}
            isFavorite={!!cat.isFavorite}
            onToggleFavorite={() => onToggleFavorite(cat.id)}
          />
        ))}
      </div>

      <button
        onClick={nextCard}
        disabled={slider + nCard >= cats.length}
        className="slider-button"
      >
        ▶
      </button>
    </div>
  );
}

export default SliderContainer;