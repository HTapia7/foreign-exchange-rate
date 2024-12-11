import axios from "axios";

const BASE_URL = "https://v6.exchangerate-api.com/v6/";
const API_KEY = process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_KEY; 

export async function latestCurrency() {
  
  try {
    const response = await axios.get(`${BASE_URL}${API_KEY}/latest/USD`);
    const data = response.data;
    return data;
    
  } catch (error) {
    console.error("Error fetching the latest currency rates:", error.message);
  }
}

// GET https://v6.exchangerate-api.com/v6/YOUR-API-KEY/pair/EUR/GBP

