class TaskBank {
	constructor(e, task) {
		this.tasksList = [];
		this.task = task;
	}
	addTask(e) {
		const that = this;
		e.preventDefault();
		if (this.task) {
			//- if isn't empty string:
			const li = document.createElement('li');
			li.setAttribute('class', 'LiTask');
			li.innerHTML = this.task + ' <button>Done</button>';
			tasksList.push(li);
			// document.querySelector('li button').addEventListener('click', removeTask); will not work because for now "li" isn't in DOM yet
			li.querySelector('button').addEventListener('click', that.removeTask);
			//! indexElements(); Filter(this.tasksList).indexElements
		} else {
			alert('No task given');
		}
	}
	removeTask() {}
	showAllTasks() {}
}
