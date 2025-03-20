import { useState } from "react";
import { fetchCats } from "../../services/catService";
import "./ListadoCat.css"; // Importar estilos

const ListadoCat = () => {
  const [cats, setCats] = useState([]);
  const [search, setSearch] = useState("");
  const [showResults, setShowResults] = useState(false); // Nuevo estado para mostrar la lista

  const handleSearch = async (e) => {
    if (e.key === "Enter" && search.trim() !== "") {
      const data = await fetchCats();
      setCats(data);
      setShowResults(true); // Mostrar los resultados después de buscar
    }
  };

  // Filtrar gatos según la búsqueda
  const filteredCats = cats.filter((cat) =>
    [cat.name, cat.description, cat.temperament]
      .some((field) => field?.toLowerCase().includes(search.toLowerCase()))
  );

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
            filteredCats.map((cat) => (
              <div key={cat.id} className="gato-item">
                <img src={cat.url} alt={cat.name} />
                <div className="gato-info">
                  <h2>{cat.name}</h2>
                  <p><strong>Temperamento:</strong> {cat.temperament}</p>
                  <p><strong>Descripción:</strong> {cat.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="mensaje-error">No se encontraron gatos.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ListadoCat;
