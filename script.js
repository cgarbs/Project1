console.log("connected");

const root = document.querySelector("#root");
console.log(root);

root.style.width = "1100px";
root.style.height = "1000px";









const createGrid = () => {
for(i = 1; i <= 100; i++) {
    const div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.borderStyle = "solid";
    div.classList.add(`grid${[i]}`);
    root.appendChild(div);
    }
}

createGrid();