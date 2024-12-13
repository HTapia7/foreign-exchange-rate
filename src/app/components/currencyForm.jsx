// import useEffect,use State 
// form option with all currencies 

import { useEffect, useState } from "react"
import { twoCurrency } from "../libs/currencyApi.js"


const currencyForm = () => {

  const [conversionRates , setConversionRates] = useState()
  const [loading , setLoading] = useState(true) 

  useEffect(() => {
    async function fetchCurrency(){
      try {
        const data = await twoCurrency()
        setConversionRates(data.conversion_rates);
      } catch (error) {
        console.error("Error fetching conversion rates:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCurrency()
  }, [])

  return  (
    
  )
}

export default currencyForm
