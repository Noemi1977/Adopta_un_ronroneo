import axios from "axios";

const API_URL = "https://api.thecatapi.com/v1/images/search?limit=10";
const API_KEY = "live_xR2TUfUJM57eCOuupoNfWYtDRBDd2qxwnVrG3MiROhHTmVSsVtHXs0IbfUGeYoHQ";

export const fetchCats = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: { "x-api-key": API_KEY }
    });
    return response.data; 
  } catch (error) {
    console.error("Error fetching cats:", error);
    return []; 
  }
};
