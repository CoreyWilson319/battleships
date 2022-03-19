function Ship(length) {
	this.length = length;
	this.hitSpace = {};
	this.sunk = false;

	for (let i = 0; i < this.length; i++) {
		this.hitSpace[i] = false;
	}

	this.findFreeSpace = () => {
		for (const key in this.hitSpace) {
			if (this.hitSpace[key] === false) {
				return key;
			}
		}
		return false;
	};

	this.hit = () => {
		let freeSpace = this.findFreeSpace();
		if (freeSpace) {
			this.hitSpace[freeSpace] = true;
			return this.hitSpace;
		} else {
			this.sunk = true;
			// function isSunk
			return false;
		}
	};

    this.isSunk = () => {
        continue
    }

	return this;
}

let n = Ship(3);

module.exports = Ship;
