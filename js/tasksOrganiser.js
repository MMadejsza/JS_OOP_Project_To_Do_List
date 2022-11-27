class tasksOrganiser {
	constructor() {
		this.filteredTasks = [];
	}
	countTasks(counterPlaceInDOM) {
		counterPlaceInDOM.textContent = this.tasksList.length;
	}
	indexTasks(tasksList) {
		tasksList.forEach(function (task, index) {
			task.dataset.id = index;
		});
	}
	displayFilteredTasks() {}
	filterTasks(event) {}
}
