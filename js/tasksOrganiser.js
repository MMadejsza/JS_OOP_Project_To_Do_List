class TasksOrganiser {
	constructor(tasksList) {
		this._filteredTasks = [];
		this.givenTasks = tasksList;
	}
	countTasks(counterPlaceInDOM) {
		counterPlaceInDOM.textContent = this.givenTasks.length;
		if (counterPlaceInDOM.textContent == 0) {
			counterPlaceInDOM.classList.toggle('greenCounter');
		}
	}
	indexTasks() {
		this.givenTasks.forEach(function (task, index) {
			task.dataset.id = index;
		});
	}
	filterTasks(e) {
		let wantedContent = e.target.value;
		this._filteredTasks = this.givenTasks.filter((task) =>
			task.textContent.includes(wantedContent)
		);
	}
	getFilteredTasks() {
		return this._filteredTasks;
	}
}
