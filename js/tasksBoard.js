class TasksBoard {
	constructor() {
		this.inputTask = document.querySelector('.task');
		this.inputSearch = document.querySelector('.search');
		this.btnAddTask = document.querySelector('button');
		this.ul = document.querySelector('ul');
		this.counterPlace = document.querySelector('h2 span');
		console.log(
			'🚀 ~ file: tasksBoard.js ~ line 8 ~ TasksBoard ~ constructor ~ this.counterPlace',
			this.counterPlace
		);
		this.tasksBank = new TasksBank(this.inputTask, this.ul, this.counterPlace);
		this.tasksOrganiser = new TasksOrganiser();
		this.btnAddTask.addEventListener('click', this.processTask.bind(this));
		this.inputSearch.addEventListener('input', this.searchTasks.bind(this));
		this.render();
	}
	processTask(e) {
		this.tasksBank.addTask(e);
		console.log(this.tasksBank.tasksList);
		this.tasksBank.showAllTasks();
	}
	searchTasks() {
		console.log('search function');
	}
	render() {}
}
