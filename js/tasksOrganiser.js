class TasksOrganiser {
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
	filterTasks(e, tasksList) {
		let wantedContent = e.target.value;
		this.filteredTasks = tasksList.filter((task) => task.textContent.includes(wantedContent));
	}
	getFilteredTasks() {
		return this.filteredTasks;
	}
}
