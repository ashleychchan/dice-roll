const die= {
    numbers: 6, 
    roll: function () {
        let random = Math.floor(Math.random() * this.numbers) + 1;
        return random;
}}
function printResult(number){
    let rollResult= document.getElementById('rollResult');
    rollResult.innerHTML= number;
}

const button = document.getElementById('button');
button.onclick = function() {
  let result = die.roll();
  printResult(result);
}

function twoDice(){
    const newElement = document.createElement("h2");
    newElement.innerHTML = "CONTENTS";
    rollResult.appendChild(newElement); 
  
}