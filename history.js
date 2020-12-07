// TODO:
// Fix player entrance onto board AND limit entrance to diceRoll 6.
// Prevent same color piece collision (including on entrance).
// Knock opposing pieces back to starting corner upon landing on same position.
// Create remaining pieces.
// Close off player homes on arrival.
// Implement parameters for victory.
// Add Instructions, center gameboard, improve aesthetics.

// Player 1 Piece1
const player = document.createElement("button");
player.classList.add("player");

blueCorner1.appendChild(player);

let place = 0;

player.onclick = function () {
  if (rolled === 2) {
    rolled--;
    if (playerMove === 1) {
      if (diceRoll === 6 && blueCorner1.contains(player) && playerCanEnter()) {
        positions[place].appendChild(player);
        rolled++;
      } else if (
        positions[place].contains(player) &&
        place + diceRoll < 24 &&
        playerCanMove(place)
      ) {
        place = place + diceRoll;
        positions[place].appendChild(player);
        if (diceRoll !== 6) {
          playerMove++;
          die.style.backgroundColor = "red";
          die.innerHTML = "Roll!";
        } else {
          playerMove = 1;
          rolled++;
        }
      } else {
        if (diceRoll === 6) {
          rolled++;
          alert("Try something else or roll again.");
        } else {
          playerMove++;
          die.style.backgroundColor = "red";
          die.innerHTML = "Roll!";
          alert("You can't do that!");
        }
      }
    } else alert("It's not your turn!");
  } else alert("Roll the die first!");
};

// // Player 1 Piece2
const player2 = document.createElement("button");
player2.classList.add("player");

blueCorner2.appendChild(player2);

let place2 = 0;

player2.onclick = function () {
  if (rolled === 2) {
    rolled--;
    if (playerMove === 1) {
      if (diceRoll === 6 && blueCorner2.contains(player2) && playerCanEnter()) {
        positions[0].appendChild(player2);
        rolled++;
      } else if (
        positions[place2].contains(player2) &&
        place2 + diceRoll < 24 &&
        playerCanMove(place2)
      ) {
        place2 = place2 + diceRoll;
        positions[place2].appendChild(player2);
        if (diceRoll !== 6) {
          playerMove++;
          die.style.backgroundColor = "red";
          die.innerHTML = "Roll!";
        } else {
          playerMove = 1;
          rolled++;
        }
      } else {
        if (diceRoll === 6) {
          rolled++;
          alert("Try something else or roll again.");
        } else {
          playerMove++;
          die.style.backgroundColor = "red";
          die.innerHTML = "Roll!";
          alert("You can't do that!");
        }
      }
    } else alert("It's not your turn!");
  } else alert("Roll the die first!");
};

// // Player 1 Piece3
const player3 = document.createElement("button");
player3.classList.add("player");

blueCorner3.appendChild(player3);

let place3 = 0;

player3.onclick = function () {
  if (rolled === 2) {
    rolled--;
    if (playerMove === 1) {
      if (diceRoll === 6 && blueCorner3.contains(player3) && playerCanEnter()) {
        positions[0].appendChild(player3);
        rolled++;
      } else if (
        positions[place3].contains(player3) &&
        place3 + diceRoll < 24 &&
        playerCanMove(place3)
      ) {
        place3 = place3 + diceRoll;
        positions[place3].appendChild(player3);
        if (diceRoll !== 6) {
          playerMove++;
          die.style.backgroundColor = "red";
          die.innerHTML = "Roll!";
        } else {
          playerMove = 1;
          rolled++;
        }
      } else {
        if (diceRoll === 6) {
          rolled++;
          alert("Try something else or roll again.");
        } else {
          playerMove++;
          die.style.backgroundColor = "red";
          die.innerHTML = "Roll!";
          alert("You can't do that!");
        }
      }
    } else alert("It's not your turn!");
  } else alert("Roll the die first!");
};

// // Player 1 Piece4
const player4 = document.createElement("button");
player4.classList.add("player");

blueCorner4.appendChild(player4);

let place4 = 0;

player4.onclick = function () {
  if (rolled === 2) {
    rolled--;
    if (playerMove === 1) {
      if (diceRoll === 6 && blueCorner4.contains(player4) && playerCanEnter()) {
        positions[0].appendChild(player4);
        rolled++;
      } else if (
        positions[place4].contains(player4) &&
        place4 + diceRoll < 24 &&
        playerCanMove(place4)
      ) {
        place4 = place4 + diceRoll;
        positions[place4].appendChild(player4);
        if (diceRoll !== 6) {
          playerMove++;
          die.style.backgroundColor = "red";
          die.innerHTML = "Roll!";
        } else {
          playerMove = 1;
          rolled++;
        }
      } else {
        if (diceRoll === 6) {
          rolled++;
          alert("Try something else or roll again.");
        } else {
          playerMove++;
          die.style.backgroundColor = "red";
          die.innerHTML = "Roll!";
          alert("You can't do that!");
        }
      }
    } else alert("It's not your turn!");
  } else alert("Roll the die first!");
};


const playerPieces = [player, player2, player3, player4];


// Blue Entrance Collision Prevention
const playerCanEnter = () => {
  if (
    positions[0].contains(player) ||
    positions[0].contains(player2) ||
    positions[0].contains(player3) ||
    positions[0].contains(player4)
  ) {
    return false;
  } else {
    return true;
  }
};


// Blue Collision Prevention
const playerCanMove = (piecePlace) => {
  const webObject = positions[piecePlace + diceRoll].children;
  const position = Array.from(webObject);
  console.log(position);
  if (position.length === 0) {
    return true;
  // } else if (playerPieces.includes(position[0])) {
  } else if (position.includes(player) ||
  position.includes(player2) ||
  position.includes(player3) ||
  position.includes(player4)) {
    return false;
  }
};


// const playerHit = (piecePlace) => {

// }

// -------------------------------------------------------------------------------------------------------

// Player 2 Piece1
const redPlayer = document.createElement("button");
redPlayer.classList.add('redplayer')

redCorner1.appendChild(redPlayer);

let redPlace = 0;

redPlayer.onclick = function() {
    if(rolled === 2) {
        rolled--
        if(playerMove === 2) {
            if(diceRoll === 6 && redCorner1.contains(redPlayer) && redPlayerCanEnter()) {
                positions2[0].appendChild(redPlayer);
                rolled++;
            }else if (positions2[redPlace].contains(redPlayer) && redPlace + diceRoll < 24 && redPlayerCanMove(redPlace)) {
                redPlace = redPlace + diceRoll;
                positions2[redPlace].appendChild(redPlayer);
                if(diceRoll !== 6) {
                    playerMove = 1;
                    die.style.backgroundColor = "blue";
                    die.innerHTML = "Roll!";
                } else {
                    playerMove = 2;
                    rolled++;
                }
            } else { 
                if(diceRoll === 6) {
                    rolled++;
                    alert("Try something else or roll again.");
                }else {
                    playerMove = 1;
                    die.style.backgroundColor = "blue";
                    die.innerHTML = "Roll!";
                    alert("You can't do that!");
                }
            }
        } else (alert("It's not your turn!"))
    } else (alert("Roll the die first!"))
}


// // Player 2 Piece2
const redPlayer2 = document.createElement("button");
redPlayer2.classList.add('redplayer')

redCorner2.appendChild(redPlayer2);

let redPlace2 = 0;

redPlayer2.onclick = function() {
    if(rolled === 2) {
        rolled--
        if(playerMove === 2) {
            if(diceRoll === 6 && redCorner2.contains(redPlayer2) && redPlayerCanEnter()) {
                positions2[0].appendChild(redPlayer2);
                rolled++;
            }else if (positions2[redPlace2].contains(redPlayer2) && redPlace2 + diceRoll < 24 && redPlayerCanMove(redPlace2)) {
                redPlace2 = redPlace2 + diceRoll;
                positions2[redPlace2].appendChild(redPlayer2);
                if(diceRoll !== 6) {
                    playerMove = 1;
                    die.style.backgroundColor = "blue";
                    die.innerHTML = "Roll!";
                } else {
                    playerMove = 2;
                    rolled++;
                }
            } else { 
                if(diceRoll === 6) {
                    rolled++;
                    alert("Try something else or roll again.");
                }else {
                    playerMove = 1;
                    die.style.backgroundColor = "blue";
                    die.innerHTML = "Roll!";
                    alert("You can't do that!");
                }
            }
        } else (alert("It's not your turn!"))
    } else (alert("Roll the die first!"))
}


// // Player 2 Piece3
const redPlayer3 = document.createElement("button");
redPlayer3.classList.add('redplayer')

redCorner3.appendChild(redPlayer3);

let redPlace3 = 0;

redPlayer3.onclick = function() {
    if(rolled === 2) {
        rolled--
        if(playerMove === 2) {
            if(diceRoll === 6 && redCorner3.contains(redPlayer3) && redPlayerCanEnter()) {
                positions2[0].appendChild(redPlayer3);
                rolled++;
            }else if (positions2[redPlace3].contains(redPlayer3) && redPlace3 + diceRoll < 24 && redPlayerCanMove(redPlace3)) {
                redPlace3 = redPlace3 + diceRoll;
                positions2[redPlace3].appendChild(redPlayer3);
                if(diceRoll !== 6) {
                    playerMove = 1;
                    die.style.backgroundColor = "blue";
                    die.innerHTML = "Roll!";
                } else {
                    playerMove = 2;
                    rolled++;
                }
            } else { 
                if(diceRoll === 6) {
                    rolled++;
                    alert("Try something else or roll again.");
                }else {
                    playerMove = 1;
                    die.style.backgroundColor = "blue";
                    die.innerHTML = "Roll!";
                    alert("You can't do that!");
                }
            }
        } else (alert("It's not your turn!"))
    } else (alert("Roll the die first!"))
}


// // Player 2 Piece4
const redPlayer4 = document.createElement("button");
redPlayer4.classList.add('redplayer')

redCorner4.appendChild(redPlayer4);

let redPlace4 = 0;

redPlayer4.onclick = function() {
    if(rolled === 2) {
        rolled--
        if(playerMove === 2) {
            if(diceRoll === 6 && redCorner4.contains(redPlayer4) && redPlayerCanEnter()) {
                positions2[0].appendChild(redPlayer4);
                rolled++;
            }else if (positions2[redPlace4].contains(redPlayer4) && redPlace4 + diceRoll < 24 && redPlayerCanMove(redPlace4)) {
                redPlace4 = redPlace4 + diceRoll;
                positions2[redPlace4].appendChild(redPlayer4);
                if(diceRoll !== 6) {
                    playerMove = 1;
                    die.style.backgroundColor = "blue";
                    die.innerHTML = "Roll!";
                } else {
                    playerMove = 2;
                    rolled++;
                }
            } else { 
                if(diceRoll === 6) {
                    rolled++;
                    alert("Try something else or roll again.");
                }else {
                    playerMove = 1;
                    die.style.backgroundColor = "blue";
                    die.innerHTML = "Roll!";
                    alert("You can't do that!");
                }
            }
        } else (alert("It's not your turn!"))
    } else (alert("Roll the die first!"))
}

const redPlayerPieces = [redPlayer, redPlayer2, redPlayer3, redPlayer4]

// Red Entrance Collision Prevention
const redPlayerCanEnter = () => {
    if(positions2[0].contains(redPlayer) ||
    positions2[0].contains(redPlayer2) ||
    positions2[0].contains(redPlayer3) ||
    positions2[0].contains(redPlayer4)) {
        return false;
    } else {
        return true;
    }
}
// Red Collision Prevention
const redPlayerCanMove = (piecePlace) => {
  const webObject2 = positions[piecePlace + diceRoll].children;
  const position2 = Array.from(webObject2);
  console.log(position2);
  if (position2.length === 0) {
    return true;
  // } else if (playerPieces.includes(position[0])) {
  } else if (position2.includes(redPlayer) ||
  position2.includes(redPlayer2) ||
  position2.includes(redPlayer3) ||
  position2.includes(redPlayer4)) {
    return false;
  }
};