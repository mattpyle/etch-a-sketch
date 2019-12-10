//on load, make a default grid of 16*16
window.onLoad = makeGrid(16);
colourCell();

// function to create a grid taking user input when sent. Loops through and creates appropriate number of cells/divs
function makeGrid(cells) {
    const container = document.getElementById("grid-container");
    container.style.setProperty('--grid-rows', cells);
    container.style.setProperty('--grid-cols', cells);
    for (c = 0; c < (cells * cells); c++) {
        let cell = document.createElement("div");
        cell.InnerText = (c + 1);
        container.appendChild(cell).className = "grid-item";
    };
};

// colours each cell/div with a random colour on hover
function colourCell() {
    const cells = document.querySelectorAll('.grid-item');
    cells.forEach(cell => {
        cell.onmouseenter = () => cell.style.background = getRandomColour();
    })
}

// resets grid colours
function resetGrid() {
    const cells = document.querySelectorAll('.grid-item');
    cells.forEach(function(cell){
        cell.style.background = "";
    });
}

// listener for the reset button
document.getElementById("reset-button").addEventListener("click", function() {
    resetGrid();
});

// listener for the new grid button. calls multiple other functions.
document.getElementById("new-grid-button").addEventListener("click", function(){
    var gridSize = prompt("Please enter a grid size");
    resetGrid();
    resizeGrid();
    makeGrid(gridSize);
    colourCell();
});

// function to delete previous divs. Called when resizing the grid.
function resizeGrid() {
    var cellsToDelete = document.getElementById("grid-container");
    var cellElementToDelete = cellsToDelete.lastElementChild;  
        while (cellElementToDelete) { 
            cellsToDelete.removeChild(cellElementToDelete); 
            cellElementToDelete = cellsToDelete.lastElementChild; 
        } 
}

// random colour function to create a hex value. Called every time a cell is hovered over.
function getRandomColour() {
    var letters = '0123456789ABCDEF';
    var colour = '#';
    for (var i = 0; i < 6; i++) {
        colour += letters[Math.floor(Math.random() * 16)];
    }
    return colour;
}