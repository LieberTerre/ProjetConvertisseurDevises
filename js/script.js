/**
 ****Change Here 
 ** function pour montre le resultat
 * @param  {} result 
 * @param  {} symbol
 */
function showAnswer(result, symbol) {
    const output = document.querySelector('output')
    output.innerText = result + " " + symbol
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

    if (base != symbol) {
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




const input = document.querySelector('#ammount')

const selectorEnter = document.querySelector('#startCurrency')

const selectorEnd = document.querySelector('#endCurrency')

// const form = document.querySelector('form')
// form.addEventListener('submit', ()=>{
//     e.prevent.preventDefault()
// })

input.addEventListener('change', (e) => {
    const input = document.querySelector('#ammount')
    console.log(input.value)
    const enterValue = getSelectorEnter()
    console.log(enterValue)
    const EndValue = getSelectorEnd()
    console.log(EndValue)
    conv(input.value, enterValue, EndValue)
})

selectorEnter.addEventListener('change', () => {
    // const enterId = getSelectorEnter()
});

selectorEnd.addEventListener('change', () => {
    // const endId =

});

function getSelectorEnter() {
    let select = document.getElementById('startCurrency');
    let choice = select.selectedIndex;
    let id = select.options[choice].value;
    return id
}

function getSelectorEnd() {
    let select = document.getElementById('endCurrency');
    let choice = select.selectedIndex;
    let id = select.options[choice].value;
    return id
}