const oneButton = document.getElementById("dice");
const twoButton = document.getElementById("die");
const rollResult = document.getElementById("rollResult");

const die = {
  numbers: 6,
  roll: function () {
    let random = Math.floor(Math.random() * this.numbers) + 1;
    return random;
  },
  roll2: function () {
    let results = [];
    do {
      results.push(die.roll(6));
    } while (results.length < 2);
    return results;
  },
};

function printResult(number) {
  rollResult.innerHTML = number;
  /*   second.innerHTML = number; */
}

function twoDice() {
  /*   const newElement = document.createElement("h2");
  newElement.id = "second";
  newElement.innerHTML = "dice";
  rollResult.appendChild(newElement);
  const second = document.getElementById("second");
  second.addEventListener("click", roll);
  oneButton.disabled = true;
  twoButton.disabled = false; */
}
twoButton.onclick = function () {
  let result = die.roll();
  printResult(result);
  console.log(result);
};
function oneDie() {
  /*  const second = document.getElementById("second");
  second.remove("second");
  oneButton.disabled = false;
  twoButton.disabled = true; */
}
oneButton.onclick = function () {
  let result = die.roll2();
  printResult(result);
};
