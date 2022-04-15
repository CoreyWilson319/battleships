const Player = require("../src/components/Player");
const Gameboard = require("../src/components/Gameboard");

test("Get Player", () => {
	let p1 = new Player();
	expect(typeof p1).toMatch("object");
});

test("Player Turn return True when it is the players turn", () => {
	let p1 = Player();
	let p2Board = new Gameboard(4);
	expect(p1.takeTurn(0, 0, p2Board)).toEqual([{ row: 0, col: 0 }]);
});

test("Player Turn increases continuously", () => {
	let p1 = new Player();
	let p2Board = new Gameboard(4);
	p1.takeTurn(0, 1, p2Board);
	expect(p1.takeTurn(0, 0, p2Board)).toEqual([
		{ row: 0, col: 1 },
		{ row: 0, col: 0 },
	]);
});

test("AI Turn works, (Random Turn)", () => {
	let p1 = new Player();
	let p2Board = new Gameboard(3);
	expect(p1.takeAITurn(p2Board).length).toEqual(1);
	// expect(p1.takeAITurn(p2Board)[0]).toHaveProperty("col");
});

test("AI won't make duplicate attacks", () => {
	let p1 = new Player();
	let p2Board = new Gameboard(5);
	p1.takeAITurn(p2Board);
	p1.takeAITurn(p2Board);
	p1.takeAITurn(p2Board);
	p1.takeAITurn(p2Board);
	p1.takeAITurn(p2Board);
	p1.takeAITurn(p2Board);
	p1.takeAITurn(p2Board);
	p1.takeAITurn(p2Board);
	p1.takeAITurn(p2Board);
	p1.takeAITurn(p2Board);
	p1.takeAITurn(p2Board);
	p1.takeAITurn(p2Board);
	p1.takeAITurn(p2Board);
	p1.takeAITurn(p2Board);
	p1.takeAITurn(p2Board);
	p1.takeAITurn(p2Board);
	p1.takeAITurn(p2Board);
	p1.takeAITurn(p2Board);
	p1.takeAITurn(p2Board);
	p1.takeAITurn(p2Board);
	p1.takeAITurn(p2Board);
	p1.takeAITurn(p2Board);
	p1.takeAITurn(p2Board);
	p1.takeAITurn(p2Board);
	p1.takeAITurn(p2Board);
	p1.takeAITurn(p2Board);
	expect(p1.takeAITurn(p2Board)).toEqual(null);
});
