"use client";
import React, { useEffect, useState } from "react";
import { latestCurrency } from "../libs/currencyApi.js";

const App = () => {
  const [conversionRates, setConversionRates] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await latestCurrency();
        setConversionRates(data.conversion_rates);
      } catch (error) {
        console.error("Error fetching conversion rates:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {loading ? (
        <h1>Loading conversion rates...</h1>
      ) : conversionRates ? (
        <div>
          <h1>Conversion Rates:</h1>
          <ul>
            {Object.entries(conversionRates).map(([currency, rate]) => (
              <li key={currency}>
                {currency}: {rate}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <h1>Failed to load conversion rates.</h1>
      )}
    </div>
  );
};

export default App;
