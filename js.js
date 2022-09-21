const oneButton = document.getElementById("dice");
const twoButton = document.getElementById("die");
const past = document.getElementById("past");
const rollResult = document.getElementById("rollResult");
const rollResult2 = document.getElementById("rollResult2");
const rollResult3 = document.getElementById("rollResult3");
const hide1 = document.getElementsByClassName("roll1");
const hide2 = document.getElementsByClassName("roll2");
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
  rollResult.style.display = "block";
  rollResult2.style.display = "none";
  rollResult3.style.display = "none";
  /*   if (rollResult2.style.display === "none") {
    rollResult2.style.display = "block";
    rollResult3.style.display = "block";
  } */
};

oneButton.onclick = function () {
  let result = die.roll2();
  printResult(result);
  pastRolls.push(result);
  printPast(pastRolls);
  rollResult2.setAttribute("src", images[pastRolls[pastRolls.length - 1] - 1]);
  console.log(images[pastRolls[pastRolls.length[0]]]);
  /* 
  console.log(images[pastRolls[pastRolls.length[0]]]); */
  rollResult.style.display = "none";
  rollResult2.style.display = "block";
  rollResult3.style.display = "block";
};
