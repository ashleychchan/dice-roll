const oneButton= document.getElementById("dice");
const twoButton= document.getElementById("die");
const rollResult= document.getElementById('rollResult');

const die= {
    numbers: 6, 
    roll: function () {
        console.log("this works");
        let random = Math.floor(Math.random() * this.numbers) + 1;
        return random;
}}
function roll() {
    let random = Math.floor(Math.random() * this.numbers) + 1;
    return random;
}

function printResult(number){
    rollResult.innerHTML= number;
    second.innerHTML= number;
}

const button = document.getElementById('button');
button.onclick = function() {
  let result = die.roll();
  printResult(result);
}

function twoDice(){
    const newElement = document.createElement("h2");
    newElement.id= "second"
    newElement.innerHTML = "dice";
    rollResult.appendChild(newElement); 
    const second= document.getElementById("second");
    second.addEventListener("click", roll);
    oneButton.disabled= true;
    twoButton.disabled = false;
}
function oneDie(){
    const second= document.getElementById("second");
    second.remove("second"); 
    oneButton.disabled= false;
    twoButton.disabled= true;
}