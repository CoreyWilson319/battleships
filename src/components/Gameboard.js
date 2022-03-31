const Ship = require("./Ship");

function Gameboard(grid) {
	this.grid = {};
	this.createGrid = (numberOfRows) => {
		for (let i = 0; i < numberOfRows; i++) {
			this.grid[i] = {};
			for (let k = 0; k < numberOfRows; k++) {
				this.grid[i][k] = null;
			}
		}
	};
	this.createGrid(grid);
	this.getGrid = () => {
		return this.grid;
	};
	this.placeShip = (ship, row, column) => {
		if (this.grid[row][column] === null) {
			ship.addLocation(row, column);
			this.grid[row][column] = ship;
			return this.grid[row][column];
		} else if (this.grid[row][column] === undefined) {
			return false;
		}
		return false;
	};

	return { getGrid, placeShip };
}

module.exports = Gameboard;
