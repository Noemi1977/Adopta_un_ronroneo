import axios from "axios";

const API_URL = "https://api.thecatapi.com/v1/images/search?limit=12&has_breeds=true";
const API_KEY = "live_xR2TUfUJM57eCOuupoNfWYtDRBDd2qxwnVrG3MiROhHTmVSsVtHXs0IbfUGeYoHQ";

export const fetchCats = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: { "x-api-key": API_KEY }
    });
    console.log(response.data);
    // localStorage.removeItem("favorites");

    //  map crea un nuevo array y recorre cada gato y transforma los datos en un nuevo objeto con la estructura que queremos.
    const catsData = response.data.map(cat=>({
      id: cat.id,
      url: cat.url,
      name: cat.breeds[0].name,
      temperament: cat.breeds[0].temperament,
      description: cat.breeds[0].description 

    })); 
    localStorage.setItem("catsData", JSON.stringify(catsData)); // Guardar todos los gatos
    
    return catsData;
  } catch (error) {
    console.error("Error fetching cats:", error);
    return []; 
  }
};
