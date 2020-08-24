function loadRemoteJsonAvecFetchEtPromise(apiUrl) {
    return fetch(apiUrl).then(function (data) {
        return data.json()
    });
}
const loadJson = loadRemoteJsonAvecFetchEtPromise
	
	
	 const apiUrl = 'http://data.fixer.io/api/latest?access_key=308a94edf6a162386b9e9
loadJson(apiUrl).then(data => {
    tableauChange = data.rates




    // TODO appeler la fonction de traitement de Michi ici?
    // mais il faut la refact
    // regardez ce que rend le console.log(suivant)
    console.log(tableauChange)


22f35c0510d00d35296854ec990aaeb6