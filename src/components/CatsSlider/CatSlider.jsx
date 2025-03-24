import { useEffect, useState } from "react";
import CatsCard from "../CatCard/CatCard";
import { fetchCats } from "../../services/catService";
import "./CatSlider.css"; 

function CatSlider() {
  const [cats, setCats] = useState([]);
  const [slider, setSelider] = useState(0);

  useEffect(() => {
    // localStorage.removeItem("favorites"); //limpiar favoritos
    const getCats = async () => {
      const catsData = await fetchCats();
      setCats(catsData);
    };

    getCats();
  }, []);

  const nCard = 7;

  const nextCard = () => {
    if (slider + nCard < cats.length) {
      setSelider(slider + 1);
    }
  };

  const preCard = () => {
    if (slider > 0) {
      setSelider(slider - 1);
    }
  };

  return (
    <div className="slider-container">
      <button onClick={preCard} disabled={slider === 0} className="slider-button">
        ◀
      </button>

      <div className="cards-container">
        {cats.slice(slider, slider + nCard).map((cat) => (
          <CatsCard key={cat.id} cat={cat} />
        ))}
      </div>

      <button onClick={nextCard} disabled={slider + nCard >= cats.length} className="slider-button">
        ▶
      </button>
    </div>
  );
}

export default CatSlider;
