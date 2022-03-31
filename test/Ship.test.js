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
	expect(newShip.addLocation(1, 3)).toEqual({ row: 1, column: 3, hit: false });
});

test("Hit function success", () => {
	let newShip = Ship(3);
	newShip.addLocation(0, 1);
	newShip.addLocation(0, 2);
	newShip.addLocation(0, 3);
	expect(newShip.hit(0, 1)).toEqual({ row: 0, column: 1, hit: true });
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
// test("Hit function", () => {
// 	let newShip = Ship(2);
// 	expect(newShip.hit()).toStrictEqual({ 0: true, 1: false });
// });

// test("Hit function return false if ship is sunk", () => {
// 	let newShip = Ship(3);
// 	newShip.hit();
// 	newShip.hit();
// 	newShip.hit();
// 	newShip.hit();
// 	newShip.hit();
// 	expect(newShip.hit()).toEqual(false);
// });

// test("Is Ship sunk after 1 hit", () => {
// 	let newShip = Ship(3);
// 	newShip.hit();
// 	expect(newShip.isSunk()).toEqual(false);
// });
// test("Is Ship sunk after no hits", () => {
// 	let newShip = Ship(3);
// 	expect(newShip.isSunk()).toEqual(false);
// });

// test("Is Ship Sunk after 3 hits", () => {
// 	let newShip = Ship(3);
// 	newShip.hit();
// 	newShip.hit();
// 	newShip.hit();
// 	expect(newShip.isSunk()).toEqual(true);
// });
