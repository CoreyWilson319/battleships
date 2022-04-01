const Ship = require("./Ship");

function Gameboard(grid) {
	this.grid = {};
	this.misses = [];
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
	this.placeShip = (ship, row, col) => {
		if (this.grid[row][col] === null) {
			ship.addLocation(row, col);
			this.grid[row][col] = ship;
			return this.grid[row][col];
		} else if (this.grid[row][col] === undefined) {
			return false;
		}
		return false;
	};

	this.addMiss = (row, col) => {
		this.misses.push({ row, col });
	};
	this.recieveAttack = (row, col) => {
		let target;
		if (this.grid[row][col]) {
			target = this.grid[row][col]["locations"];
		}
		if (target) {
			let res = target.filter(
				// Think I want to use filter here but it works for now
				(location) => location.row === row && location.col === col
			);
			if (res[0].hit === false) {
				this.grid[row][col].hit(row, col);
				return target;
			} else if (res[0].hit === true) {
				this.addMiss(row, col);
				return false;
			}
		}
		this.addMiss(row, col);
		return false;
	};

	this.checkForActiveShips = () => {
		// console.log(getGrid());
		for (let row in this.grid) {
			for (let col in this.grid[row]) {
				if (this.grid[row][col]) {
					if (this.getGrid()[row][col].sunk === false) return true;
				}
			}
		}
		return false;
	};

	return { getGrid, placeShip, recieveAttack, misses, checkForActiveShips };
}

module.exports = Gameboard;
