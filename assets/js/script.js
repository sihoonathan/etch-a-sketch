

function makeInitialGrid() {
    const row = 15;
    const col = 15;

    const gridTemplate = document.createAttribute('grid-template');
    gridTemplate.value = 'auto auto auto / auto auto auto';

    const container = document.querySelector('.container');

    appendDivs(container, row, col);

}

function fillGrid(e) {
    if (!e.isTrusted) return;
    console.log(this);
    this.style.backgroundColor = "grey";
}


function appendDivs(container, row, col) {

    const totalGridNum = row * col;
    container.style.gridTemplate = 'auto '.repeat(row) + '/' + ' auto'.repeat(col);

    for (let i = 0; i < totalGridNum; i++) {
        const div = document.createElement('div');
        container.appendChild(div);
    }


    const gridElements = container.childNodes;
    gridElements.forEach(grid => {
        grid.className += "addBorder";
        grid.addEventListener('mouseenter', fillGrid);
    });
}



makeInitialGrid();