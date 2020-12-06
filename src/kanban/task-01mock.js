const initialData = {
	backlog: [
		{
		  id: 0,
		  title: "Login page - perfomance issues"
		},
		{
		  id: 1,
		  title: "Sprint bugfix"
		},
		{
		  id: 2,
		  title: "task3"
		}
	],
	ready: [
		{
		  id: 3,
		  title: "Shop page - perfomance issues"
		},
		{
		  id: 4,
		  title: "Checkout bugfix"
		}
	],
	inProgress: [],
	finished: []
};

if (!localStorage.getItem("tasks")) {
	localStorage.setItem("tasks", JSON.stringify(initialData));
	localStorage.setItem('id-count', '5')
}
