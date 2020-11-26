console.log("connected");

const root = document.querySelector("#root");
root.style.width = "1100px";
root.style.height = "1000px";


// Grid
const createGrid = () => {
for(i = 1; i <= 100; i++) {
    const div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.borderStyle = "solid";
    div.style.borderColor = "grey";
    div.classList.add(`grid${[i]}`);
    root.appendChild(div);
    }
}

createGrid();


// Gameboard Positions 1-24
const position1 = document.querySelector(".grid73");
const position2 = document.querySelector(".grid63");
const position3 = document.querySelector(".grid53");
const position4 = document.querySelector(".grid43");
const position5 = document.querySelector(".grid33");
const position6 = document.querySelector(".grid23");
const position7 = document.querySelector(".grid24");
const position8 = document.querySelector(".grid25");
const position9 = document.querySelector(".grid26");
const position10 = document.querySelector(".grid27");

const position11 = document.querySelector(".grid28");
const position12 = document.querySelector(".grid38");
const position13 = document.querySelector(".grid48");
const position14 = document.querySelector(".grid58");
const position15 = document.querySelector(".grid68");
const position16 = document.querySelector(".grid78");
const position17 = document.querySelector(".grid77");
const position18 = document.querySelector(".grid76");
const position19 = document.querySelector(".grid75");
const position20 = document.querySelector(".grid74");

//Player 1 Homes
const blueHome1 = document.querySelector(".grid64");
const blueHome2 = document.querySelector(".grid54");
const blueHome3 = document.querySelector(".grid44");
const blueHome4 = document.querySelector(".grid34");

const positions = [position1, position2, position3, position4, position5, position6, position7, position8, position9, position10, position11, position12, position13, position14, position15, position16, position17, position18, position19, position20]

// Player 1 Corner
const blueCorner1 = document.querySelector(".grid82");
const blueCorner2 = document.querySelector(".grid92");
const blueCorner3 = document.querySelector(".grid81");
const blueCorner4 = document.querySelector(".grid91");

//Player 2 Home
const redHome1 = document.querySelector(".grid37");
const redHome2 = document.querySelector(".grid47");
const redHome3 = document.querySelector(".grid57");
const redHome4 = document.querySelector(".grid67");

// Player 2 Corner
const redCorner1 = document.querySelector(".grid19");
const redCorner2 = document.querySelector(".grid9");
const redCorner3 = document.querySelector(".grid20");
const redCorner4 = document.querySelector(".grid10");


const createPositions = () => {
    for (i in positions) {
        positions[i].classList.add('position')
        const positionDiv = document.createElement("div");
        positions[i].appendChild(positionDiv);
    }
}

createPositions();


// Player 1 Piece
const player = document.createElement("button");
player.style.width = "50px";
player.style.height = "50px";
player.style.backgroundColor = "lightBlue";
positions.appendChild(player);
console.log(positions)




//Arrows

// const firstBlue = document.querySelector(".grid73");
// firstBlue.classList.add('firstBlue');
// const blueArrow = document.createElement("div")
// firstBlue.appendChild(blueArrow);
// blueArrow.classList.add('blueArrow');

// const firstRed = document.querySelector(".grid28");
// firstRed.classList.add('firstRed');
// const redArrow = document.createElement("div")
// firstRed.appendChild(redArrow);
// redArrow.classList.add('redArrow');