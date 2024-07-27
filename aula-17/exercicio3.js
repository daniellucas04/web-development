window.onload = () => {
    document.getElementById('convert').addEventListener('click', sendRequest);
}

function sendRequest() {
    let coin = document.getElementById("conversion_coin");
    let coinText = coin.options[coin.selectedIndex].text;
    let endpoint = "https://economia.awesomeapi.com.br/json/last";

    let valueToConversion = document.getElementById('conversion_value').value;
    let request = new XMLHttpRequest();

    request.open("GET", `${endpoint}/${coinText}-BRL`);
    request.send();

    request.onload = function() {
        let response = JSON.parse(this.response);
        let coinValue = 0;

        if (coinText == 'USD' ) {
            coinValue = response.USDBRL.ask;
        } else if (coinText == 'EUR') {
            coinValue = response.EURBRL.ask;
        } else {
            coinValue = response.BTCBRL.ask;
        }

        document.getElementById('saida').innerHTML = `${coinText} ${Number(valueToConversion * coinValue).toFixed(2)}`;
    }
}