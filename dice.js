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


// Blue Victory
const blueVictory1 = blueHome1.children;
const blueVictory2 = blueHome2.children;
const blueVictory3 = blueHome3.children;
const blueVictory4 = blueHome4.children;
const blueVictory = () => {
  if(blueVictory1.length === 1 && 
  blueVictory2.length === 1 &&
  blueVictory3.length === 1 &&
  blueVictory4.length === 1) {
    alert("Game over! Blue Wins!")
  }
}


// Red Victory
const redVictory1 = redHome1.children;
const redVictory2 = redHome2.children;
const redVictory3 = redHome3.children;
const redVictory4 = redHome4.children;
const redVictory = () => {
  if(redVictory1.length === 1 && 
  redVictory2.length === 1 &&
  redVictory3.length === 1 &&
  redVictory4.length === 1) {
    alert("Game over! Red Wins!")
  }
}
