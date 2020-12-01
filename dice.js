// Die Roll
const die = document.createElement("button");
die.style.width = "100px";
die.style.height = "100px";
die.style.backgroundColor = "beige";
const diePlace = document.querySelector(".grid100");
diePlace.appendChild(die);

// const rollDice = () => {
//     let result = 1 + Math.floor(Math.random()*6);
//     console.log(result);
//   }

die.onclick = function () {
  let result = 1 + Math.floor(Math.random() * 6);
  console.log(result);
  diceRoll = result;
};

// who is the player on the move
// roll the dice
// show available plays - highlight pieces that can move to that roll
//
