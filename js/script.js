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

