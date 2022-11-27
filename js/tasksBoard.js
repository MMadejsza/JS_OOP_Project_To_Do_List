class TasksBoard {
	constructor() {
		this.inputTask = document.querySelector('.task');
		this.inputSearch = document.querySelector('input:nth-child(3)');
		this.btnAddTask = document.querySelector('button');
		this.ul = document.querySelector('ul');
		this.counterPlace = document.querySelector('h1 span');
		this.tasksBank = new TasksBank(e, this.inputTask, this.ul, this.counterPlace);
		this.btnAddTask.addEventListener('click', this.processTask.bind(this));
		this.inputSearch.addEventListener('input', this.searchTasks.bind(this));
		this.render();
	}
	processTask() {}
	searchTasks() {}
	render() {}
}
