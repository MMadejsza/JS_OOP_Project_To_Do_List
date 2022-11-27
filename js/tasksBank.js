class TasksBank {
	constructor(task, ulInDOM, counterPlaceInDOM) {
		this._tasksList = [];
		this.task = task;
		this.ulInDOM = ulInDOM;
		this.counterPlaceInDOM = counterPlaceInDOM;
		this.tasksOrganiser = new TasksOrganiser(this.get_tasksList());
	}

	get_tasksList() {
		return this._tasksList;
	}
	addTask(e) {
		const that = this;
		e.preventDefault();
		if (this.task.value) {
			//- if isn't empty string:
			const li = document.createElement('li');
			li.setAttribute('class', 'LiTask');
			li.innerHTML = this.task.value + ' <button class="btnRemove">Done</button>';
			li.querySelector('button').addEventListener('click', that.removeTask);
			this._tasksList.push(li);
			this.task.value = '';
			//- document.querySelector('li button').addEventListener('click', removeTask); will not work because for now "li" isn't in DOM yet
			this.tasksOrganiser.indexTasks();
		} else {
			alert('No task given');
		}
	}
	showAllTasks() {
		this._tasksList.forEach((taskAsLi) => this.ulInDOM.appendChild(taskAsLi));
		this.tasksOrganiser.countTasks(this.counterPlaceInDOM);
	}
	removeTask = (e) => {
		//- button's parent removed from DOM:
		e.target.parentNode.remove();
		//- dataset previously given in "indexTasks()"
		let elementID = e.target.parentNode.dataset.id;
		this._tasksList.splice(elementID, 1);
		this.tasksOrganiser.indexTasks();
		this.tasksOrganiser.countTasks(this.counterPlaceInDOM);
	};
}
