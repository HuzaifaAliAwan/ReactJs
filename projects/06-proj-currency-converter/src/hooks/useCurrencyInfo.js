import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
    const [data, setData] = useState({})
    const apiUrl = `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_XdfqwFcVrbQWMJsKf60uRpfzwGTXgTYloXhFA6ro&currencies=&base_currency=${baseCurrency}`
    useEffect(()=>{
        fetch(apiUrl)
        .then((res)=>res.json())
        .then((res)=>{setData(res['data'])})
        
    },[baseCurrency])
    console.log(data)
    return data
}

export default useCurrencyInfo;