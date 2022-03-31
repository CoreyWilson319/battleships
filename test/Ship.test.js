const Ship = require("../src/components/Ship");

test("Create Ship", () => {
	expect(Ship()).toBeInstanceOf(Object);
});

test("Ship has length, hit and sunk properties", () => {
	expect(Ship().hasOwnProperty("length")).toBe(true);
	expect(Ship().hasOwnProperty("locations")).toBe(true);
	expect(Ship().hasOwnProperty("sunk")).toBe(true);
});

test("Set Ship Location", () => {
	let newShip = Ship(3);
	expect(newShip.addLocation(1, 3)).toEqual({ row: 1, col: 3, hit: false });
});

test("Hit function success", () => {
	let newShip = Ship(3);
	newShip.addLocation(0, 1);
	newShip.addLocation(0, 2);
	newShip.addLocation(0, 3);
	expect(newShip.hit(0, 1)).toEqual({ row: 0, col: 1, hit: true });
});

test("Hit function failure", () => {
	let newShip = Ship(3);
	newShip.addLocation(0, 1);
	newShip.addLocation(0, 2);
	newShip.addLocation(0, 3);
	expect(newShip.hit(2, 0)).toEqual(false);
});

test("Sink a ship", () => {
	let newShip = Ship(3);
	newShip.addLocation(0, 1);
	newShip.addLocation(0, 2);
	newShip.addLocation(0, 3);
	newShip.hit(0, 1);
	newShip.hit(0, 2);
	newShip.hit(0, 3);
	expect(newShip.sinkCheck()).toEqual(true);
});

test("Sink check is false if ship not sunken", () => {
	let newShip = Ship(3);
	newShip.addLocation(0, 1);
	newShip.addLocation(0, 2);
	newShip.addLocation(0, 3);
	newShip.hit(0, 1);
	newShip.hit(0, 2);
	expect(newShip.sinkCheck()).toEqual(false);
});
