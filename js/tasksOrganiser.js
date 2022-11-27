class tasksOrganiser extends TasksBank {
	constructor(event, task, ulInDOM, tasksList, counterPlaceInDOM) {
		super(event, task, ulInDOM, tasksList);
		this.counterPlaceInDOM = counterPlaceInDOM;
	}
	countTasks() {}
	indexTasks() {}
	displayFilteredTasks() {}
	filterTasks(event) {}
}
