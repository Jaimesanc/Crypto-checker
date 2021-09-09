const xhr = new XMLHttpRequest();

let input = prompt("Insert the id of a crypto (ie: bitcoin) to retrieve its actual value");
const url = "https://api.coingecko.com/api/v3/coins/";
let endpoint = ""

function onRequestHandler(){
  if(this.readyState == 4 && this.status == 200){
    const jsonResponse = JSON.parse(this.response);
    let moneda = jsonResponse.name
    let simbolo = jsonResponse.symbol
    let valor = jsonResponse.market_data.current_price.usd
    console.log(`El ${moneda} (${simbolo}) vale actualmente ${valor} USD`);

  }
  else if(this.readyState == 4 && this.status == 404){
    console.log('No existe ninguna cryptomoneda con el ID: '+input)
  }else{
    console.log('Se ha obtenido una respuesta inesperada')
  }
}

endpoint = url+input;
xhr.addEventListener('load', onRequestHandler);
xhr.open('GET', endpoint);
xhr.send()