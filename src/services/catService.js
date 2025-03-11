import axios from "axios";

const API_URL = "https://api.thecatapi.com/v1/images/search?limit=10";
const API_KEY = "live_xR2TUfUJM57eCOuupoNfWYtDRBDd2qxwnVrG3MiROhHTmVSsVtHXs0IbfUGeYoHQ";

// Exportamos la función fetchCats
export const fetchCats = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: { "x-api-key": API_KEY }
    });
    return response.data; // Devolvemos los datos de los gatos obtenidos
  } catch (error) {
    console.error("Error fetching cats:", error);
    return []; // Devolvemos un array vacío si ocurre un error
  }
};
