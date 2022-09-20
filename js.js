const oneButton = document.getElementById("dice");
const twoButton = document.getElementById("die");
const past = document.getElementById("past");
const rollResult = document.getElementById("rollResult");
let images = [
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
  rollResult.setAttribute("src", images[random]);
  printPast(pastRolls);
  console.log(rollResult);
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
