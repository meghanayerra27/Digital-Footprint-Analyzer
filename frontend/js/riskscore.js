// riskScore.js

document.addEventListener("DOMContentLoaded", function(){

const riskValue = document.getElementById("riskValue");

if(riskValue){

// Example risk score (later this can come from backend API)
let score = Math.floor(Math.random() * 100);

// Display score
riskValue.innerText = score;

// Change color based on risk level
if(score <= 30){
    riskValue.style.color = "green";
}
else if(score <= 70){
    riskValue.style.color = "orange";
}
else{
    riskValue.style.color = "red";
}

}

});