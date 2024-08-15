import {useEffect, useState} from "react"


function useCurrencyinfo(currency){
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
    }, [])
}