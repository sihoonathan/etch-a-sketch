function makeInitialGrid() {
    const row = 15;
    const col = 15;

    let container = document.querySelector('.container');

    appendDivs(container, row, col);
}

function fillGridGrey(e) {

    if (!e.isTrusted) return;

    console.log(this);
    this.style.backgroundColor = "grey";
}

function fillGridRainbow(e) {
    if (!e.isTrusted) return;
    console.log(this);

    const redVal = Math.floor(Math.random() * 256);
    const grnVal = Math.floor(Math.random() * 256);
    const bluVal = Math.floor(Math.random() * 256);

    this.style.backgroundColor = `rgba(${redVal},${grnVal},${bluVal})`;

}

function appendDivs(container, row, col) {

    const totalGridNum = row * col;
    container.style.gridTemplate = 'auto '.repeat(row) + '/' + ' auto'.repeat(col);

    for (let i = 0; i < totalGridNum; i++) {
        let div = document.createElement('div');
        container.appendChild(div);
    }

    let gridElements = container.childNodes;
    gridElements.forEach(grid => {
        grid.className += "addBorder";

        grid.addEventListener('mouseenter', fillGridGrey);

    });
}

function reset() {
    let container = document.querySelector('.container');
    container.style.removeProperty('gridTemplate');

    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }

    let size = prompt("Input any number between 1 - 100 to set the grid size. \n ex: Pressing in 50 will generate a grid of 50 x 50.");

    while (size <= 0 || size > 100) {
        alert("Please input a number between 1 and 100");
        size = prompt("Input any number between 1 - 100 to set the grid size. \n ex: Pressing in 50 will generate a grid of 50 x 50.");
    }
    appendDivs(container, size, size);
}

function rainbowTurnOn(e) {
    const containerDivs = document.querySelector('.container').childNodes;
    console.log(containerDivs);

    containerDivs.forEach(div => {
        div.removeEventListener('mouseenter', fillGridGrey);
        div.addEventListener('mouseenter', fillGridRainbow);
    })
}

function rainbowTurnOff(e) {

    const containerDivs = document.querySelector('.container').childNodes;
    console.log(containerDivs);
    containerDivs.forEach(div => {
        div.removeEventListener('mouseenter', fillGridRainbow);
        div.addEventListener('mouseenter', fillGridGrey);
    })
}

const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', reset)

const rainbowBtn = document.getElementById('rainbow');
rainbowBtn.addEventListener('click', rainbowTurnOn);

const classicBtn = document.getElementById('classic');
classicBtn.addEventListener('click', rainbowTurnOff);

makeInitialGrid();



