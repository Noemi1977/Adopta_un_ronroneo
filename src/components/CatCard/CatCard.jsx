import { useNavigate } from "react-router-dom";
import { useReducer, useEffect } from "react";
import "./CatCard.css"; 

// iniciaalizamos el useReducer cogiendo los datos de favoritos del localStore o delvolvemos un objeto vacio
//  parce se encarga e convertirlo en un objeto
const initState = JSON.parse(localStorage.getItem("favorites")) || {};

// funcion reducer para controlar cuando cambia el valor de favoritos en stateFav
function reducer(state, action){
  switch (action.type){
    case "cambioFav":
      const newState = {...state, [action.payload]:!state[action.payload],};
      localStorage.setItem("favorites",JSON.stringify(newState));
      // console.log(newState);
      return newState;
    default:
      return state
  }
}


function CatsCard({ cat }) {
  const navigate = useNavigate();
  const [stateFav, dispatch] = useReducer(reducer, initState );
      
  const handleAdoptClick = () => {
    navigate("/Contacto"); 
  };
const cambiarFav= ()=>{
  if (!cat.id) {
    console.error("El gato no tiene un ID ");
    return;
  }
  dispatch({type:"cambioFav", payload: cat.id})
  // console.log({type:"cambioFav", payload: cat.id});
};
    return (
      <div className="cat-card">
        <div className="image-container">
          <img src={cat.url} alt="Cat" className="cat-image" />
        </div>
        <div>
        <h3>{cat.name}</h3>
        <button className="favorite-button" onClick={cambiarFav}>
            {stateFav[cat.id] ? "💚" : "🤍"}
        </button>
        <p>{cat.temperament}</p>
        </div>
        <div>
          
        <button className="adopt-button" onClick={handleAdoptClick}>Adoptar</button>
         
      </div>
    </div>
  );
}

export default CatsCard;