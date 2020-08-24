function loadRemoteJsonAvecFetchEtPromise(apiUrl) {
    return fetch(apiUrl).then(function (data) {
        return data.json()
    });
}
const loadJson = loadRemoteJsonAvecFetchEtPromise