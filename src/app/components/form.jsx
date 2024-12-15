"use client";
import currencies from "../data/currencies.json";
import { useState } from "react";

const CurrencyConverterForm = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const BASE_URL = "https://v6.exchangerate-api.com/v6/";
  const API_KEY = process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_KEY;

  const formData = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const amount = e.target.amount.value;
    const fromCurrency = e.target["from-currency"].value;
    const toCurrency = e.target["to-currency"].value;

    if (!amount || !fromCurrency || !toCurrency) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }

    try {
      const pairURL = `${BASE_URL}${API_KEY}/pair/${fromCurrency}/${toCurrency}`;
      const response = await fetch(pairURL);
      const data = await response.json();

      if (data.result === "success") {
        const convertedAmount = (data.conversion_rate * amount).toFixed(2);
        setResult(`${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`);
      } else {
        setError("Failed to fetch exchange rate.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="w-full max-w-xl p-10 bg-white border border-gray-300 shadow-2xl pt-14 rounded-2xl"
        onSubmit={formData}
      >
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
          Currency Converter
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <label
              htmlFor="amount"
              className="block mb-4 text-xl font-semibold text-gray-700"
            >
              Amount:
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              className="block w-full p-4 text-2xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter amount"
              required
            />
          </div>

          <div>
            <label
              htmlFor="from-currency"
              className="block mb-4 text-xl font-semibold text-gray-700"
            >
              From:
            </label>
            <select
              id="from-currency"
              name="from-currency"
              defaultValue="USD" // Default set to USD
              className="block w-full p-4 text-2xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="to-currency"
              className="block mb-4 text-xl font-semibold text-gray-700"
            >
              To:
            </label>
            <select
              id="to-currency"
              name="to-currency"
              defaultValue="EUR" // Default set to EUR
              className="block w-full p-4 text-2xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className="w-full px-6 py-4 text-2xl text-white transition bg-indigo-600 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
            disabled={loading}
          >
            {loading ? "Converting..." : "Convert"}
          </button>
        </div>

        {error && <p className="mt-4 text-lg text-red-500">{error}</p>}
        {result && <p className="mt-4 text-lg text-green-500">{result}</p>}
      </form>
    </div>
  );
};

export default CurrencyConverterForm;
