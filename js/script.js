let tableauChange = null;

const apiUrl = 'http://data.fixer.io/api/latest?access_key=308a94edf6a162386b9e93e05271eac5';

loadJson(apiUrl).then(data => {
    tableauChange = data.rates

    // TODO appeler la fonction de traitement de Michi ici?

});

// mais la definir là?


