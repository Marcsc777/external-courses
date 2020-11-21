const tasks = JSON.parse(localStorage.getItem("tasks"));
let idCount = +localStorage.getItem("id-count");
const blocks = {
  backlog: document.querySelector('[data-tasks-block=backlog] .tasks-block__tasks-container'),
  ready: document.querySelector('[data-tasks-block=ready] .tasks-block__tasks-container'),
  inProgress: document.querySelector('[data-tasks-block=inProgress] .tasks-block__tasks-container'),
  finished: document.querySelector('[data-tasks-block=finished] .tasks-block__tasks-container'),
}; 
const addButtons = {
  backlog: document.querySelector('[data-tasks-block=backlog] > .tasks-block__footer > .tasks-block__add-task-button'),
  ready: document.querySelector('[data-tasks-block=ready] > .tasks-block__footer > .tasks-block__add-task-button'),
  inProgress: document.querySelector('[data-tasks-block=inProgress] > .tasks-block__footer > .tasks-block__add-task-button'),
  finished: document.querySelector('[data-tasks-block=finished] > .tasks-block__footer > .tasks-block__add-task-button'),
}; 
const taskBlocksOrder = ['backlog', 'ready', 'inProgress', 'finished'];
const renderTasks = () => {
	localStorage.setItem("id-count", `${idCount}`);
	localStorage.setItem("tasks", JSON.stringify(tasks));
	
	Object.keys(tasks).forEach(key => {
		blocks[key].innerHTML = '';
		tasks[key].forEach(task => {
			const taskElem = document.createElement('div');
			taskElem.innerText = task.title;
			taskElem.className = 'tasks_enter';
			blocks[key].appendChild(taskElem);
		})
	})
	
	taskBlocksOrder.forEach((key, i) => {
		const nextKey = taskBlocksOrder[i + 1];
		if (!nextKey) {
			return;
		}
		if (tasks[key].length) {
			addButtons[nextKey].disabled = false;
		} else {
			addButtons[nextKey].disabled = true;
		}
	})
}

taskBlocksOrder.forEach(key => {
	if (key==='backlog') {
		addButtons[key].addEventListener('click', () => {
			const input = document.createElement('input');
			input.classList.add('tasks_enter');
			addButtons[key].parentElement.insertBefore(input, addButtons[key]);
			addButtons['backlog'].disabled = true;
			input.addEventListener('blur', ({ target: { value } }) => {
				if (!value) {
					return;
				}
				
				idCount += 1;
				tasks[key].push({ id: idCount, title: value });
				input.remove();
				renderTasks();
				addButtons['backlog'].disabled = false;
			})
		})
		return;
	}
	
	addButtons[key].addEventListener('click', () => {
		const select = document.createElement('div');
		
		select.innerHTML = 'select task &#9660';
		select.classList.add('div_move');
		
		const blockOrder = taskBlocksOrder.findIndex(blockKey => key === blockKey);
		const prevBlockName = taskBlocksOrder[blockOrder - 1];
		
		blocks[key].appendChild(select);
		addButtons[key].disabled = true;
		
		select.addEventListener('click', ({ target }) => {
			const list = document.createElement('ul');
			list.classList.add('ul_move');
			tasks[prevBlockName].forEach(({ title, id }) => {
				const option = document.createElement('div');
				option.innerText = title;
				option.value = id;
				const li_item = document.createElement('li');
				li_item.classList.add('li_move');
				
				if (!select.classList.contains('disable_select')) {
					select.appendChild(list);
					select.classList.add('disable_select');
				} else {
					select.addEventListener('click', ({ target }) => {
						addButtons[key].disabled = false;
						select.remove();
					})
				}
				list.appendChild(li_item);
				li_item.innerText = title;
				li_item.value = id;
				
				li_item.addEventListener('click', ({ target }) => {
					const taskIndex = tasks[prevBlockName].findIndex(({ id }) => {
						return +id === +target.value;
					})
					
					tasks[key] = [...tasks[key], ...tasks[prevBlockName].splice(taskIndex, 1)];
					select.remove();
					option.remove();
					addButtons[key].disabled = false;
					renderTasks();
				});
			});
		});
	});
});

renderTasks();
