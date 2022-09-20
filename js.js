const oneButton = document.getElementById("dice");
const twoButton = document.getElementById("die");
const past = document.getElementById("past");
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
let pastRolls = [];
function printResult(number) {
  console.log(pastRolls);
  rollResult.innerHTML = number;
}
function printPast() {
  past.innerHTML = pastRolls;
}
twoButton.onclick = function () {
  let result = die.roll();
  printResult(result);
  pastRolls.push(result);
  printPast(pastRolls);
};

oneButton.onclick = function () {
  let result = die.roll2();
  printResult(result);
  pastRolls.push(result);
  printPast(pastRolls);
};

pastRolls.forEach((roll) => {
  past.insertAdjacentElement("beforebegin", `<p>${roll}</p>`);
});
