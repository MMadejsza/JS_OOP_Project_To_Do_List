class tasksOrganiser extends TasksBank {
	constructor(event, task, ulInDOM, tasksList, counterPlaceInDOM) {
		super(event, task, ulInDOM, tasksList);
		this.counterPlaceInDOM = counterPlaceInDOM;
	}
	countTasks() {
		this.counterPlaceInDOM.textContent = this.tasksList.length;
	}
	indexTasks() {
		this.tasksList.forEach(function (task, index) {
			task.dataset.id = index;
		});
	}
	displayFilteredTasks() {}
	filterTasks(event) {}
}
