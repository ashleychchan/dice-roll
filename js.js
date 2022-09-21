const oneButton = document.getElementById("dice");
const twoButton = document.getElementById("die");
const past = document.getElementById("past");
const rollResult = document.getElementById("rollResult");
const rollResult2 = document.getElementById("rollResult2");
const rollResult3 = document.getElementById("rollResult3");
const hide1 = document.querySelector(".roll1");
const hide2 = document.querySelector(".roll2");
let images = [
  // "./img/1.svg",
  "./img/1.svg",
  "./img/2.svg",
  "./img/3.svg",
  "./img/4.svg",
  "./img/5.svg",
  "./img/6.svg",
];

const die = {
  numbers: 6,
  roll: function () {
    let random = Math.floor(Math.random() * this.numbers) + 1;
    return random;
  },
  roll2: function () {
    let results = [];
    do {
      results.push(this.roll(6));
    } while (results.length < 2);
    return results;
  },
};
let pastRolls = [];
function printResult(number) {
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
  rollResult.setAttribute("src", images[pastRolls[pastRolls.length - 1] - 1]);
  console.log(hide1);
  hide2.classList.add("hide");
  hide1.classList.remove("hide");
};

oneButton.onclick = function () {
  let result = die.roll2();
  printResult(result);
  pastRolls.push(result);
  printPast(pastRolls);
  hide1.classList.add("hide");
  hide2.classList.remove("hide");
  rollResult2.setAttribute(
    "src",
    images[pastRolls[pastRolls.length - 1][0] - 1]
  );
  rollResult3.setAttribute(
    "src",
    images[pastRolls[pastRolls.length - 1][1] - 1]
  );
};
