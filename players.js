// Player 1 Piece1
const player = document.createElement("button");
player.classList.add('player');

blueCorner1.appendChild(player);

let place = 0;

player.onclick = function() {
    if(rolled === 2) {
        rolled--
        if(playerMove === 1) {
            if(diceRoll === 6 && blueCorner1.contains(player) && playerCanEnter()) {
                positions[0].appendChild(player);
                rolled++;
            }else if (positions[place].contains(player) && place + diceRoll < 24 && playerCanMove()) {
                place = place + diceRoll;
                positions[place].appendChild(player);
                if(diceRoll !== 6) {
                    playerMove++;
                    die.style.backgroundColor = "red";
                    die.innerHTML = "Roll!";
                } else {
                    playerMove = 1;
                    rolled++;
                }
            } else { 
                if(diceRoll === 6) {
                    alert("Try something else or roll again.");
                }else {
                    playerMove++;
                    die.style.backgroundColor = "red";
                    die.innerHTML = "Roll!";
                    alert("You can't do that!");
                }
            }
        }
    } else (alert("Roll the die first!"))
}


// // Player 1 Piece2
const player2 = document.createElement("button");
player2.classList.add('player');

blueCorner2.appendChild(player2);

let place2 = 0;

player2.onclick = function() {
    if(rolled === 2) {
        rolled--
        if(playerMove === 1) {
            if(diceRoll === 6 && blueCorner2.contains(player2) && playerCanEnter()) {
                positions[0].appendChild(player2);
                rolled++;
            }else if (positions[place2].contains(player2) && place2 + diceRoll < 24 && playerCanMove()) {
                place2 = place2 + diceRoll;
                positions[place2].appendChild(player2);
                if(diceRoll !== 6) {
                    playerMove++;
                    die.style.backgroundColor = "red";
                    die.innerHTML = "Roll!";
                } else {
                    playerMove = 1;
                    rolled++;
                }
            } else { 
                if(diceRoll === 6) {
                    alert("Try something else or roll again.");
                }else {
                    playerMove++;
                    die.style.backgroundColor = "red";
                    die.innerHTML = "Roll!";
                    alert("You can't do that!");
                }
            }
        } 
    } else (alert("Roll the die first!"))
}


// // Player 1 Piece3
const player3 = document.createElement("button");
player3.classList.add('player');

blueCorner3.appendChild(player3);

let place3 = 0;

player3.onclick = function() {
    if(rolled === 2) {
        rolled--
        if(playerMove === 1) {
            if(diceRoll === 6 && blueCorner3.contains(player3) && playerCanEnter()) {
                positions[0].appendChild(player3);
                rolled++;
            }else if (positions[place3].contains(player3) && place3 + diceRoll < 24 && playerCanMove()) {
                place3 = place3 + diceRoll;
                positions[place3].appendChild(player3);
                if(diceRoll !== 6) {
                    playerMove++;
                    die.style.backgroundColor = "red";
                    die.innerHTML = "Roll!";
                } else {
                    playerMove = 1;
                    rolled++;
                }
            } else { 
                if(diceRoll === 6) {
                    alert("Try something else or roll again.");
                }else {
                    playerMove++;
                    die.style.backgroundColor = "red";
                    die.innerHTML = "Roll!";
                    alert("You can't do that!");
                }
            }
        } 
    } else (alert("Roll the die first!"))
}

// // Player 1 Piece4
const player4 = document.createElement("button");
player4.classList.add('player');

blueCorner4.appendChild(player4);

let place4 = 0;

player4.onclick = function() {
    if(rolled === 2) {
        rolled--
        if(playerMove === 1) {
            if(diceRoll === 6 && blueCorner4.contains(player4) && playerCanEnter()) {
                positions[0].appendChild(player4);
                rolled++;
            }else if (positions[place4].contains(player4) && place4 + diceRoll < 24 && playerCanMove()) {
                place4 = place4 + diceRoll;
                positions[place4].appendChild(player4);
                if(diceRoll !== 6) {
                    playerMove++;
                    die.style.backgroundColor = "red";
                    die.innerHTML = "Roll!";
                } else {
                    playerMove = 1;
                    rolled++;
                }
            } else { 
                if(diceRoll === 6) {
                    alert("Try something else or roll again.");
                }else {
                    playerMove++;
                    die.style.backgroundColor = "red";
                    die.innerHTML = "Roll!";
                    alert("You can't do that!");
                }
            }
        } 
    } else (alert("Roll the die first!"))
}

// Blue Entrance Collision Prevention
const playerCanEnter = () => {
    if(positions[0].contains(player) ||
    positions[0].contains(player2) ||
    positions[0].contains(player3) ||
    positions[0].contains(player4)) {
        return false;
    } else {
        return true;
    }
}
// Blue Collision Prevention
const playerCanMove = () => {
    if(place + diceRoll === place2 ||
        place + diceRoll === place3 ||
        place + diceRoll === place4) {
            return false;
        }
    if(place2 + diceRoll === place ||
        place2 + diceRoll === place3 ||
        place2 + diceRoll === place4) {
            return false;
        }
    if(place3 + diceRoll === place ||
        place3 + diceRoll === place2 ||
        place3 + diceRoll === place4) {
            return false;
        }
    if(place4 + diceRoll === place ||
        place4 + diceRoll === place2 ||
        place4 + diceRoll === place3) {
            return false;
        } 
    else {
        return true;
    }
}

// TODO:
// Fix player entrance onto board AND limit entrance to diceRoll 6. DONE
// Prevent same color piece collision (including on entrance).
// Knock opposing pieces back to starting corner upon landing on same position.
// Create remaining pieces.
// Close off player homes on arrival.
// Implement parameters for victory.
// Add Instructions, center gameboard, improve aesthetics


// Player 2 Piece1
const redPlayer = document.createElement("button");
redPlayer.style.width = "50px";
redPlayer.style.height = "50px";
redPlayer.style.backgroundColor = "pink";

redCorner1.appendChild(redPlayer);

let redPlace = 0;

redPlayer.onclick = function() {
    if(rolled === 2) {
        rolled--
        if(playerMove === 2) {
            if(diceRoll === 6 && redCorner1.contains(redPlayer)) {
                positions2[0].appendChild(redPlayer);
                rolled++;
            }else if (positions2[redPlace].contains(redPlayer) && redPlace + diceRoll < 24) {
                redPlace = redPlace + diceRoll;
                positions2[redPlace].appendChild(redPlayer);
                if(diceRoll !== 6) {
                    playerMove--;
                    die.style.backgroundColor = "blue";
                    die.innerHTML = "Roll!";
                } else { 
                    playerMove = 2;
                    rolled++;
                }
            } else { 
                if(diceRoll === 6) {
                    alert("Try something else or roll again.");
                }else {
                    playerMove--;
                    die.style.backgroundColor = "blue";
                    die.innerHTML = "Roll!";
                    alert("You can't do that!");
                }
            }
        } 
    } else (alert("Roll the die first!"))
}

// // Player 2 Piece2


// // Player 2 Piece3


// // Player 2 Piece4
