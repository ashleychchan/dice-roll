const oneButton = document.getElementById("dice");
const twoButton = document.getElementById("die");
const past = document.getElementById("past");
const rollResult = document.getElementById("rollResult");
const rollResult2 = document.getElementById("rollResult2");
const rollResult3 = document.getElementById("rollResult3");
const rollResultText = document.getElementById("rollResultText");
const rollResultText2 = document.getElementById("rollResultText2");
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
let pastRolls = [];
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
function printResult(number) {
  if (number == "6") {
    rollResultText2.insertAdjacentHTML(
      "afterend",
      "<p>you rolled the devils number! </p>"
    );
    console.log(rollResultText2.innerHTML);
  } else if (number == "4") {
    rollResultText2.insertAdjacentHTML(
      "afterend",
      "<p>did you know 4 in chinese means death? </p> "
    );
  } else {
    rollResultText2.innerHTML = "";
    console.log(rollResultText2.innerText);
  }
  rollResultText2.innerHTML = number;
}
function printPast() {
  let singlePast = pastRolls[[pastRolls.length - 1]] + ",";
  past.insertAdjacentHTML("beforebegin", singlePast);
}
twoButton.onclick = function () {
  let result = die.roll();
  printResult(result);
  pastRolls.push(result);
  printPast(pastRolls);
  rollResult.setAttribute("src", images[pastRolls[pastRolls.length - 1] - 1]);
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
