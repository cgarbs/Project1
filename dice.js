// Die Roll
const die = document.createElement("button");
die.style.width = "100px";
die.style.height = "100px";
die.style.backgroundColor = "blue";
const diePlace = document.querySelector(".grid100");
diePlace.appendChild(die);
die.classList.add("die");

let rolled = 1;

die.onclick = function () {
  let result = 1 + Math.floor(Math.random() * 6);
  diceRoll = result;
  die.innerHTML = result;
  rolled = 2;

};












// who is the player on the move
// roll the dice
// show available plays - highlight pieces that can move to that roll
