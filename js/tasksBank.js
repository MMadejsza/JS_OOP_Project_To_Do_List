class TasksBank {
	constructor(e, task, ulInDOM) {
		this.tasksList = [];
		this.task = task;
		this.ulInDOM = ulInDOM;
	}
	addTask(e) {
		const that = this;
		e.preventDefault();
		if (this.task) {
			//- if isn't empty string:
			const li = document.createElement('li');
			li.setAttribute('class', 'LiTask');
			li.innerHTML = this.task + ' <button>Done</button>';
			li.querySelector('button').addEventListener('click', that.removeTask);
			tasksList.push(li);
			//- document.querySelector('li button').addEventListener('click', removeTask); will not work because for now "li" isn't in DOM yet
			//! indexElements(); Filter(this.tasksList).indexElements
		} else {
			alert('No task given');
		}
	}
	removeTask(e) {
		//- button's parent removed from DOM:
		e.target.parentNode.remove();
		//- dataset previously given in "indexElements()"
		elementID = e.target.parentNode.dataset.id;
		this.tasksList.splice(elementID, 1);
		//! indexElements(); Filter(this.tasksList).indexElements
		//! indexElements(); Filter(this.tasksList).countTasks();
	}
	showAllTasks() {
		this.tasksList.forEach((taskAsLi) => this.ulInDOM.appendChild(taskAsLi));
		//! indexElements(); Filter(this.tasksList).countTasks();
	}
}
