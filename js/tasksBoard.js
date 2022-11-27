class TasksBoard {
	constructor() {
		this.inputTask = document.querySelector('.task');
		this.inputSearch = document.querySelector('.search');
		this.btnAddTask = document.querySelector('button');
		this.ul = document.querySelector('ul');
		this.counterPlace = document.querySelector('h2 span');
		this.tasksBank = new TasksBank(this.inputTask, this.ul, this.counterPlace);
		this.tasksOrganiser = new TasksOrganiser(this.tasksBank.tasksList);
		this.btnAddTask.addEventListener('click', this.processTask.bind(this));
		this.inputSearch.addEventListener('input', this.searchTasks.bind(this));
	}
	processTask(e) {
		this.tasksBank.addTask(e);
		this.tasksBank.showAllTasks();
	}
	searchTasks(e) {
		this.tasksOrganiser.filterTasks(e);
		this.ul.textContent = '';
		this.tasksOrganiser
			.getFilteredTasks()
			.forEach((element) => this.ul.appendChild(element), this);
		//- 2nd argument in forEach we can pass over "this" to bind it properly
	}
}
