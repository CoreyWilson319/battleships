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

test("Can't place Ship in place where an existing ship is located", () => {
	let newBoard = Gameboard(5);
	let newShip = Ship(3);
	newShip.placeShip(newShip, 0, 3);
	expect(newBoard.placeShip(newShip, 0, 3)).toEqual(false);
});

test("Can't place Ship off the gameboard", () => {
	let newBoard = Gameboard(5);
	let newShip = Ship(3);
	expect(newBoard.placeShip(newShip, 0, 7)).toEqual(false);
});

test("Recieve attack that will land", () => {
	let newBoard = Gameboard(5);
	let newShip = Ship(3);
	newBoard.placeShip(newShip, 0, 0);
	newBoard.placeShip(newShip, 0, 1);
	newBoard.placeShip(newShip, 0, 2);
	expect(newBoard.recieveAttack(0, 0)).toEqual([
		{ col: 0, hit: true, row: 0 },
		{ col: 1, hit: false, row: 0 },
		{ col: 2, hit: false, row: 0 },
	]);
	expect(newBoard.getGrid()[0][0].sinkCheck()).toEqual(false);
});
test("Recieve attack that will MISS", () => {
	let newBoard = Gameboard(3);
	let newShip = Ship(3);
	newBoard.placeShip(newShip, 0, 0);
	newBoard.placeShip(newShip, 0, 1);
	newBoard.placeShip(newShip, 0, 2);
	expect(newBoard.recieveAttack(0, 3)).toEqual(false);
	expect(newBoard.getGrid()[0][0].sinkCheck()).toEqual(false);
});
test("Recieve 2 attacks that will land and not sink ship", () => {
	let newBoard = Gameboard(3);
	let newShip = Ship(3);
	newBoard.placeShip(newShip, 0, 0);
	newBoard.placeShip(newShip, 0, 1);
	newBoard.placeShip(newShip, 0, 2);
	newBoard.recieveAttack(0, 0);
	expect(newBoard.recieveAttack(0, 1)).toEqual([
		{ col: 0, hit: true, row: 0 },
		{ col: 1, hit: true, row: 0 },
		{ col: 2, hit: false, row: 0 },
	]);
	expect(newBoard.getGrid()[0][0].sinkCheck()).toEqual(false);
});
test("Recieve enough attacks that will land and sink ship", () => {
	let newBoard = Gameboard(3);
	let newShip = Ship(3);
	newBoard.placeShip(newShip, 0, 0);
	newBoard.placeShip(newShip, 0, 1);
	newBoard.placeShip(newShip, 0, 2);
	newBoard.recieveAttack(0, 0);
	newBoard.recieveAttack(0, 1);
	expect(newBoard.recieveAttack(0, 2)).toEqual([
		{ col: 0, hit: true, row: 0 },
		{ col: 1, hit: true, row: 0 },
		{ col: 2, hit: true, row: 0 },
	]);
	expect(newBoard.getGrid()[0][0].sinkCheck()).toEqual(true);
});
test("Recieve 2 attacks that will land and not sink ship on the same location", () => {
	let newBoard = Gameboard(3);
	let newShip = Ship(3);
	newBoard.placeShip(newShip, 0, 0);
	newBoard.placeShip(newShip, 0, 1);
	newBoard.placeShip(newShip, 0, 2);
	// newBoard.recieveAttack(0, 0);
	expect(newBoard.recieveAttack(0, 0)).toEqual([
		{ col: 0, hit: true, row: 0 },
		{ col: 1, hit: false, row: 0 },
		{ col: 2, hit: false, row: 0 },
	]);
	expect(newBoard.recieveAttack(0, 0)).toEqual(false);
	expect(newBoard.getGrid()[0][0].sinkCheck()).toEqual(false);
	expect(newBoard.misses).toEqual([{ col: 0, row: 0 }]);
});

test("Recieve an attack that misses and update miss history", () => {
	let newBoard = Gameboard(3);
	let newShip = Ship(1);
	newBoard.placeShip(newShip, 0, 1);
	newBoard.recieveAttack(0, 0);
	expect(newBoard.misses).toEqual([{ col: 0, row: 0 }]);
	expect(newBoard.getGrid()[0][1].sinkCheck()).toEqual(false);
});

test("Check for active ships when 1 remains", () => {
	let newBoard = Gameboard(4);
	let shipA = Ship(1);
	newBoard.placeShip(shipA, 0, 0);
	expect(newBoard.checkForActiveShips()).toEqual(true);
});
test("Check for active ships when 1 should remain and 1 sunk", () => {
	let newBoard = Gameboard(4);
	let shipA = Ship(1);
	let shipB = Ship(1);
	newBoard.placeShip(shipA, 0, 0);
	newBoard.placeShip(shipB, 0, 1);
	newBoard.recieveAttack(0, 0);
	expect(newBoard.checkForActiveShips()).toEqual(true);
});
test("Check for active ships when none should remain", () => {
	let newBoard = Gameboard(4);
	let shipA = Ship(1);
	let shipB = Ship(1);
	newBoard.placeShip(shipA, 0, 0);
	newBoard.placeShip(shipB, 0, 1);
	newBoard.recieveAttack(0, 0);
	newBoard.recieveAttack(0, 1);
	expect(newBoard.checkForActiveShips()).toEqual(false);
});
