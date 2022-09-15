const oneButton= document.getElementById("dice");
const twoButton= document.getElementById("die");
const rollResult= document.getElementById('rollResult');
const second= document.getElementById("second");
const die= {
    numbers: 6, 
    roll: function () {
        let random = Math.floor(Math.random() * this.numbers) + 1;
        return random;
}}
function printResult(number){
    
    rollResult.innerHTML= number;
}

const button = document.getElementById('button');
button.onclick = function() {
  let result = die.roll();
  printResult(result);
}

function twoDice(){
    const newElement = document.createElement("h2");
    newElement.id= "second"
    newElement.innerHTML = "CONTENTS";
    rollResult.appendChild(newElement); 
    oneButton.disabled= true;
    twoButton.disabled = false;
}
function oneDie(){
    second.remove("second"); 
    oneButton.disabled= false;
    twoButton.disabled= true;
}