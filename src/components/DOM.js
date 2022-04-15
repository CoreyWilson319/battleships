function DOM() {
	let initializeDom = () => {
		let docBody = document.querySelector("body");
		let title = document.createElement("div");
		title.classList.add("game-title");
		title.innerText = "BattleShip";
		docBody.appendChild(title);
		console.log(docBody);
	};

	return { initializeDom };
}

module.exports = DOM;
