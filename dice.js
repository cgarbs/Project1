// Die Roll
const die = document.createElement("button");
die.style.width = "100px";
die.style.height = "100px";
die.style.backgroundColor = "blue";
const diePlace = document.querySelector(".grid100");
diePlace.appendChild(die);
die.classList.add("die");
die.innerHTML = ("Roll!");

let rolled = 1;

die.onclick = function () {
  let result = 1 + Math.floor(Math.random() * 6);
  diceRoll = result;
  die.innerHTML = result;
  console.log(result);
  rolled = 2;
};
