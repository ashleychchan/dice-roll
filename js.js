const oneButton = document.getElementById("dice");
const twoButton = document.getElementById("die");
const past = document.getElementById("past");
const rollResult = document.getElementById("rollResult");
const rollResult2 = document.getElementById("rollResult2");
const rollResult3 = document.getElementById("rollResult3");
const hide1 = document.getElementsByClassName("1roll");
const hide2 = document.getElementsByClassName("2roll");
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
      results.push(die.roll(6));
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
  if (hide2.style.display === "none") {
    hide2.style.display = "block";
  } else {
    hide2.style.display = "none";
  }
  /*   if (hide2.style.display !== "none") {
    hide2.style.display = "none";
  } else {
    hide2.style.display = "block";
  } */
};

oneButton.onclick = function () {
  let result = die.roll2();
  printResult(result);
  pastRolls.push(result);
  printPast(pastRolls);
  rollResult.setAttribute("src", images[pastRolls[pastRolls.length - 1] - 1]);
  console.log(images[pastRolls[pastRolls.length - 1] - 1]);
};

pastRolls.forEach((roll) => {
  past.insertAdjacentElement("beforebegin", `<p>${roll}</p>`);
});
