const CurrencyConverterForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="w-full max-w-xl p-10 bg-white border border-gray-300 shadow-2xl pt-14 rounded-2xl">
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
              className="block w-full p-4 text-2xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="" disabled selected>
                Select currency
              </option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="JPY">JPY</option>
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
              className="block w-full p-4 text-2xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="" disabled selected>
                Select currency
              </option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="JPY">JPY</option>
            </select>
          </div>
        </div>

        
        <div className="mt-10">
          <button
            type="submit"
            className="w-full px-6 py-4 text-2xl text-white transition bg-indigo-600 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Convert
          </button>
        </div>
      </form>
    </div>
  );
};

export default CurrencyConverterForm;
