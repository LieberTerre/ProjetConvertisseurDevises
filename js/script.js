let tableauChange = null;

const apiUrl = 'http://data.fixer.io/api/latest?access_key=308a94edf6a162386b9e93e05271eac5';

loadJson(apiUrl).then(data => {
    tableauChange = data.rates




    // TODO appeler la fonction de traitement de Michi ici?
    // mais il faut la refact
    // regardez ce que rend le console.log(suivant)
    console.log(tableauChange)



});



function conv(money,input,output){
let taux=1;
const yen=2;
const dollar=1;
const euro=0;

if(input===yen&&output===euro){
  taux=0.008;
}
if(input===yen&&output===dollar){
  taux=0.0095;
}
if(input===euro&&output===dollar){
  taux=1.1826;
}
if(input===euro&&output===yen){
  taux=125.0953;
}
if(input===dollar&&output===euro){
  taux=0.8456;
}
if(input===dollar&&output===yen){
  taux=105.78;
}


return money*taux;
}


