let UsdBuyRate = 429;
let UsdSellRate = 431;
let EurBuyRate = 507;
let EurSellRate = 509;

idCurrencyType.addEventListener('mouseout',calculatingExchange);

function calculatingExchange(){
    let money = idInputNumber.value;
    let currency = idCurrencyType.value;

    if(currency == "kzt"){
        document.getElementById("idCalculationKzt").textContent = "-"
        document.getElementById("idCalculationUsd").textContent = (money / UsdSellRate).toFixed(2);
        document.getElementById("idCalculationEur").textContent = (money / EurSellRate).toFixed(2);
    }else if(currency == "usd"){
        document.getElementById("idCalculationKzt").textContent = (money * UsdBuyRate).toFixed(2);
        document.getElementById("idCalculationUsd").textContent = "-";
        document.getElementById("idCalculationEur").textContent = (money * UsdBuyRate / EurSellRate).toFixed(2);
    }else if(currency == "eur"){
        document.getElementById("idCalculationKzt").textContent = (money * EurBuyRate).toFixed(2);
        document.getElementById("idCalculationUsd").textContent = (money * EurBuyRate / UsdSellRate).toFixed(2);
        document.getElementById("idCalculationEur").textContent = "-";
    }
}