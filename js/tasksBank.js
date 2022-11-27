class TasksBank {
	constructor(task, ulInDOM, counterPlaceInDOM) {
		this.tasksList = [];
		console.log(
			'🚀 ~ file: tasksBank.js ~ line 4 ~ TasksBank ~ constructor ~ this.tasksList at start:',
			this.tasksList
		);
		this.task = task;
		this.ulInDOM = ulInDOM;
		this.counterPlaceInDOM = counterPlaceInDOM;
		this.tasksOrganiser = new TasksOrganiser(this.tasksList);
	}
	addTask(e) {
		const that = this;
		e.preventDefault();
		if (this.task.value) {
			//- if isn't empty string:
			const li = document.createElement('li');
			li.setAttribute('class', 'LiTask');
			li.innerHTML = this.task.value + ' <button>Done</button>';
			li.querySelector('button').addEventListener('click', that.removeTask);
			this.tasksList.push(li);
			this.task.value = '';
			console.log(li);
			console.log(this.tasksList);
			//- document.querySelector('li button').addEventListener('click', removeTask); will not work because for now "li" isn't in DOM yet
			this.tasksOrganiser.indexTasks(this.tasksList);
		} else {
			alert('No task given');
		}
	}
	showAllTasks() {
		this.tasksList.forEach((taskAsLi) => this.ulInDOM.appendChild(taskAsLi));
		this.tasksOrganiser.countTasks(this.counterPlaceInDOM);
	}
	removeTask = (e) => {
		//- button's parent removed from DOM:
		console.log(
			'🚀 ~ file: tasksBank.js ~ line 4 ~ TasksBank ~ constructor ~ this.tasksList before removing:',
			this.tasksList
		);
		console.log('e.target.parentNode', e.target.parentNode);
		e.target.parentNode.remove();
		//- dataset previously given in "indexTasks()"
		let elementID = e.target.parentNode.dataset.id;
		this.tasksList.splice(elementID, 1);
		console.log(
			'🚀 ~ file: tasksBank.js ~ line 4 ~ TasksBank ~ constructor ~ this.tasksList after removing:',
			this.tasksList
		);
		this.tasksOrganiser.indexTasks(this.tasksList);
		this.tasksOrganiser.countTasks(this.counterPlaceInDOM);
	};
}
