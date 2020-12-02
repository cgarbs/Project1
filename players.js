// Player 1 Piece1
const player = document.createElement("button");
player.style.width = "50px";
player.style.height = "50px";
player.style.backgroundColor = "lightBlue";

blueCorner1.appendChild(player);

let place = 0;

player.onclick = function() {
    if(playerMove === 1) {
        if(place + diceRoll < 24) {
        place = place + diceRoll;
        positions[place].appendChild(player);
        console.log(place);
        // place++;
        // playerMove = (playerMove + 1);
        }
    }
}

// // Player 1 Piece2
// const player2 = document.createElement("button");
// player2.style.width = "50px";
// player2.style.height = "50px";
// player2.style.backgroundColor = "lightBlue";

// blueCorner2.appendChild(player2);

// let place2 = 0;

// player2.onclick = function() {
//     positions[place2].appendChild(player2);
//     place2++;
// }

// // Player 1 Piece3
// const player3 = document.createElement("button");
// player3.style.width = "50px";
// player3.style.height = "50px";
// player3.style.backgroundColor = "lightBlue";

// blueCorner3.appendChild(player3);

// let place3 = 0;

// player3.onclick = function() {
//     positions[place3].appendChild(player3);
//     place3++;
// }

// // Player 1 Piece4
// const player4 = document.createElement("button");
// player4.style.width = "50px";
// player4.style.height = "50px";
// player4.style.backgroundColor = "lightBlue";

// blueCorner4.appendChild(player4);

// let place4 = 0;

// player4.onclick = function() {
//     positions[place4].appendChild(player4);
//     place4++;
// }






// Player 2 Piece1
const redPlayer = document.createElement("button");
redPlayer.style.width = "50px";
redPlayer.style.height = "50px";
redPlayer.style.backgroundColor = "pink";

redCorner1.appendChild(redPlayer);

let redPlace = 0;

redPlayer.onclick = function() {
    if(playerMove === 2) {
        positions2[redPlace].appendChild(redPlayer);
        redPlace++;
        playerMove = (playerMove - 1);
    }
}

// // Player 2 Piece2
// const redPlayer2 = document.createElement("button");
// redPlayer2.style.width = "50px";
// redPlayer2.style.height = "50px";
// redPlayer2.style.backgroundColor = "pink";

// redCorner2.appendChild(redPlayer2);

// let redPlace2 = 0;

// redPlayer2.onclick = function() {
//     positions2[redPlace2].appendChild(redPlayer2);
//     redPlace2++;
// }

// // Player 2 Piece3
// const redPlayer3 = document.createElement("button");
// redPlayer3.style.width = "50px";
// redPlayer3.style.height = "50px";
// redPlayer3.style.backgroundColor = "pink";

// redCorner3.appendChild(redPlayer3);

// let redPlace3 = 0;

// redPlayer3.onclick = function() {
//     positions2[redPlace3].appendChild(redPlayer3);
//     redPlace3++;
// }

// // Player 2 Piece4
// const redPlayer4 = document.createElement("button");
// redPlayer4.style.width = "50px";
// redPlayer4.style.height = "50px";
// redPlayer4.style.backgroundColor = "pink";

// redCorner4.appendChild(redPlayer4);

// let redPlace4 = 0;

// redPlayer4.onclick = function() {
//     positions2[redPlace4].appendChild(redPlayer4);
//     redPlace4++;
// }