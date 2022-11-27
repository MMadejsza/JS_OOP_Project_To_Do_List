class TasksBank {
	constructor(e, task, ulInDOM) {
		this.event = e;
		this.tasksList = [];
		this.task = task;
		this.ulInDOM = ulInDOM;
	}
	addTask(event) {
		const that = this;
		event.preventDefault();
		if (this.task) {
			//- if isn't empty string:
			const li = document.createElement('li');
			li.setAttribute('class', 'LiTask');
			li.innerHTML = this.task + ' <button>Done</button>';
			li.querySelector('button').addEventListener('click', that.removeTask);
			tasksList.push(li);
			//- document.querySelector('li button').addEventListener('click', removeTask); will not work because for now "li" isn't in DOM yet
			tasksOrganiser().indexTasks(this.tasksList);
		} else {
			alert('No task given');
		}
	}
	removeTask(event) {
		//- button's parent removed from DOM:
		event.target.parentNode.remove();
		//- dataset previously given in "indexElements()"
		elementID = event.target.parentNode.dataset.id;
		this.tasksList.splice(elementID, 1);
		tasksOrganiser().indexTasks(this.tasksList);
		//! indexElements(); Filter(this.tasksList).countTasks();
	}
	showAllTasks() {
		this.tasksList.forEach((taskAsLi) => this.ulInDOM.appendChild(taskAsLi));
		//! indexElements(); Filter(this.tasksList).countTasks();
	}
}
