class TasksBank {
	constructor(e, task, ulInDOM, counterPlaceInDOM) {
		this.event = e;
		this.tasksList = [];
		this.task = task;
		this.ulInDOM = ulInDOM;
		this.counterPlaceInDOM = counterPlaceInDOM;
		this.tasksOrganiser = new tasksOrganiser();
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
			this.tasksOrganiser.indexTasks(this.tasksList);
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
		this.tasksOrganiser.indexTasks(this.tasksList);
		this.tasksOrganiser.countTasks(this.counterPlaceInDOM);
	}
	showAllTasks() {
		this.tasksList.forEach((taskAsLi) => this.ulInDOM.appendChild(taskAsLi));
		this.tasksOrganiser.countTasks(this.counterPlaceInDOM);
	}
}
