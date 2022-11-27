class TasksOrganiser {
	constructor(tasksList) {
		this._filteredTasks = [];
		this._givenTasks = tasksList;
	}
	countTasks(counterPlaceInDOM) {
		counterPlaceInDOM.textContent = this._givenTasks.length;
		if (counterPlaceInDOM.textContent == 0) {
			counterPlaceInDOM.classList.toggle('greenCounter');
			counterPlaceInDOM.textContent = `${this._givenTasks.length} - You've done everything!`;
		}
	}
	indexTasks() {
		this._givenTasks.forEach(function (task, index) {
			task.dataset.id = index;
		});
	}
	filterTasks(e) {
		let wantedContent = e.target.value;
		this._filteredTasks = this._givenTasks.filter((task) =>
			task.textContent.includes(wantedContent)
		);
	}
	getFilteredTasks() {
		return this._filteredTasks;
	}
}
