/**
 ****Change Here 
 ** function pour montre le resultat
 * @param  {} result 
 * @param  {} symbol
 */
function showAnswer(result, symbol) {

  console.log(result + " " + symbol);
}
/**
 *  How to use :   conv(300, 'USD', 'JPY')
 * @param  {} amount 
 * @param  {} base
 * @param  {} symbol
 */
function conv(amount, base, symbol) {
  const apiUrl = 'https://api.exchangeratesapi.io/latest?symbols=' + symbol + '&base=' + base;

  let rate;

  if (base === symbol) {
    loadRemoteJson(apiUrl).then(data => {
      //console.log("loadJson", data.rates[symbol]);
      rate = data.rates[symbol];
      showAnswer(Math.floor((amount * rate) * 100) / 100, symbol);
    })
  } else {
    showAnswer(amount, symbol);
  }
}

/**
 * ne touche pas pour get API
 * @param  {} apiUrl
 */
function loadRemoteJson(apiUrl) {
  // How to use
  // loadRemoteJson(apiUrl).then(data => {
  // }) 
  return fetch(apiUrl).then(function (data) {
    return data.json();
  })
}
