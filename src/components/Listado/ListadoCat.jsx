import { useState } from "react";
import { fetchCats } from "../../services/catService";
import SliderContainer from "../Slider/SliderContainer";
import "./ListadoCat.css";

const ListadoCat = () => {
  const [cats, setCats] = useState([]);
  const [search, setSearch] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [slider, setSlider] = useState(0);
  const [nCard, setNCard] = useState(3);

  const handleSearch = async (e) => {
    if (e.key === "Enter" && search.trim() !== "") {
      const data = await fetchCats();
      setCats(data);
      setShowResults(true);
    }
  };

  const filteredCats = cats.filter((cat) =>
    [cat.name, cat.description, cat.temperament]
      .some((field) => field?.toLowerCase().includes(search.toLowerCase()))
  );

  const nextCard = () => {
    if (slider + nCard < filteredCats.length) {
      setSlider(slider + 1);
    }
  };

  const preCard = () => {
    if (slider > 0) {
      setSlider(slider - 1);
    }
  };

  return (
    <div className="listado-cat">
      <h1 className="titulo">Lista de Gatos</h1>

      <input
        type="text"
        placeholder="Escribe un dato y presiona Enter..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleSearch}
        className="buscador"
      />

      {showResults && (
        <div>
          {filteredCats.length > 0 ? (
            <SliderContainer
              cats={filteredCats}
              slider={slider}
              nCard={nCard}
              onToggleFavorite={(id) => console.log("Favorito:", id)}
              preCard={preCard}
              nextCard={nextCard}
            />
          ) : (
            <p className="mensaje-error">No se encontraron gatos.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ListadoCat;