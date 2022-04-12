function Player() {
	// let hitSuccess = [];
	this.turns = [];
	this.possibleAttacks = [];
	const takeTurn = (row, col, board) => {
		board.recieveAttack(row, col);
		this.turns.push({ row, col });
		return this.turns;
	};
	let populatePossibleAttacks = (board) => {
		let grid = board.grid;
		for (const [key, value] of Object.entries(grid)) {
			Object.keys(value).forEach((col) => {
				if (this.possibleAttacks.includes({ row: key, col: col }) === false) {
					this.possibleAttacks.push({ row: key, col: col });
				}
			});
		}
		// console.log(this.possibleAttacks);
	};
	let findPossibleAttack = (board) => {
		if (this.possibleAttacks.length === 0 && this.turns.length === 0) {
			populatePossibleAttacks(board);
		}
		if (this.possibleAttacks.length >= 1) {
			let randomAttack =
				this.possibleAttacks[
					Math.floor(Math.random() * this.possibleAttacks.length)
				];

			this.possibleAttacks.splice(
				this.possibleAttacks.indexOf(randomAttack),
				1
			);
			return randomAttack;
		}

		return null;
		// console.log(board.grid);
		// populate possibleAttacks Array
		// random choice from said array and remove it from that array
		// PROFIT??
	};
	const takeAITurn = (board) => {
		// console.log(board);
		let attackCoords = findPossibleAttack(board);
		if (attackCoords) {
			takeTurn(attackCoords.row, attackCoords.col, board);
		} else {
			return null;
		}
		return this.turns;
	};

	const getTurns = () => {
		return this.turns;
	};
	return { takeTurn, takeAITurn, getTurns };
}

module.exports = Player;
