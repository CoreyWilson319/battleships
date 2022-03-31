function Ship(length) {
	this.length = length;
	this.sunk = false;
	this.locations = [];

	this.addLocation = (row, col) => {
		if (this.locations.length + 1 > this.length) {
			throw "All available placements for the ship have already been made.";
		} else {
			this.locations.push({ row, col, hit: false });
			return this.locations[this.locations.length - 1];
		}
	};

	this.hit = (row, col) => {
		let match = null;
		this.locations.forEach((location) => {
			if (
				location["row"] === row &&
				location["col"] === col &&
				location["hit"] === false
			) {
				location["hit"] = true;
				match = location;
			}
		});
		// this.sinkCheck();
		return match ? match : false;
	};

	this.sinkCheck = () => {
		let foundHit = 0;
		let foundNotHit = 0;
		this.locations.forEach((location) => {
			if (location["hit"] === false) {
				foundNotHit++;
			} else {
				foundHit++;
			}
		});

		if (foundNotHit > 0) {
			return false;
		} else if (foundHit === this.length && foundNotHit === 0) {
			return true;
		}
	};
	// iterate through all locations
	// if every hit value is true
	// ship is sunk
	// else do nothing ship is not sunk and should remain false

	return this;
}

module.exports = Ship;
