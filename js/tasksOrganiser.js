class TasksOrganiser {
	constructor(tasksList) {
		this.filteredTasks = [];
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
		this.filteredTasks = this.givenTasks.filter((task) =>
			task.textContent.includes(wantedContent)
		);
	}
	getFilteredTasks() {
		return this.filteredTasks;
	}
}
