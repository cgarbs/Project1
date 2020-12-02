// Player 1 Piece1
const player = document.createElement("button");
player.style.width = "50px";
player.style.height = "50px";
player.style.backgroundColor = "lightBlue";
player.classList.add('player');

blueCorner1.appendChild(player);

let place = 0;

player.onclick = function() {
    if(rolled === 2) {
        rolled--
        if(playerMove === 1) {
            if(place + diceRoll < 24) {
                place = place + diceRoll;
                positions[place].appendChild(player);
                if(diceRoll !== 6) {
                    playerMove = (playerMove + 1);
                    die.style.backgroundColor = "red";
                } else (playerMove = 1);
            } else { 
                (playerMove = playerMove + 1);
                die.style.backgroundColor = "red";
                alert("You can't do that!");
            }
        } 
    } else (alert("Roll the die first!"))
}


// // Player 1 Piece2


// // Player 1 Piece3


// // Player 1 Piece4


// TODO:
// Fix player entrance onto board AND limit entrance to diceRoll 6
// Close off player homes on arrival
// Knock opposing pieces back to starting corner upon landing on same position
// Finish player movement functions and create remaining pieces
// Implement parameters for victory
// Add Instructions, center gameboard, improve aesthetics
// Recreate buttons on HTML/CSS??
const hello = document.querySelector(".hello");
blueHome1.appendChild(hello);


// Player 2 Piece1
const redPlayer = document.createElement("button");
redPlayer.style.width = "50px";
redPlayer.style.height = "50px";
redPlayer.style.backgroundColor = "pink";

redCorner1.appendChild(redPlayer);

let redPlace = 0;

redPlayer.onclick = function() {
    if(rolled === 2) {
        rolled--;
        if(playerMove === 2) {
            if(redPlace + diceRoll < 24) {
                redPlace = redPlace + diceRoll;
                positions2[redPlace].appendChild(redPlayer);
                if(diceRoll !== 6) {
                    playerMove = (playerMove - 1);
                    die.style.backgroundColor = "blue";
                } else (playerMove = 2);
            } else {
                (playerMove = playerMove - 1);
                die.style.backgroundColor = "blue";
                alert("You can't do that!");
            }
        }
    } else (alert("Roll the die first!"))
}

// // Player 2 Piece2


// // Player 2 Piece3


// // Player 2 Piece4
