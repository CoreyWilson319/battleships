const Gameboard = require("../src/components/Gameboard");
const Ship = require("../src/components/Ship");

test("Import Gameboard function", () => {
	expect(typeof Gameboard).toEqual(typeof Function);
});

test("get Gameboard grid", () => {
	let newBoard = Gameboard(4);
	expect(newBoard.getGrid()).toEqual({
		0: { 0: null, 1: null, 2: null, 3: null },
		1: { 0: null, 1: null, 2: null, 3: null },
		2: { 0: null, 1: null, 2: null, 3: null },
		3: { 0: null, 1: null, 2: null, 3: null },
	});
});

test("Place Ship", () => {
	let newBoard = Gameboard(4);
	let newShip = Ship(3);
	expect(newBoard.placeShip(newShip, 0, 2)).toEqual(newBoard.getGrid()[0][2]);
});

test("Can't place Ship in place it cannot be placed", () => {
	let newBoard = Gameboard(5);
	let newShip = Ship(3);
	newShip.placeShip(newShip, 0, 3);
	expect(newBoard.placeShip(newShip, 0, 3)).toEqual(false);
});
