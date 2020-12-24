const list = document.createElement('ul');
const li_item1 = document.createElement('li');
const li_item2 = document.createElement('li');
const li_item3 = document.createElement('li');

list.classList.add('list');
li_item1.innerText = "My account";
li_item1.classList.add('li_list');
li_item2.innerText = "My tasks";
li_item2.classList.add('li_list');
li_item3.innerText = "Log out";
li_item3.classList.add('li_list');

list.appendChild(li_item1);
list.appendChild(li_item2);
list.appendChild(li_item3);

const container = document.getElementById('user-menu');
const svg_image = document.getElementById('svg_image');
const showList = () => {
	svg_image.classList.add('svg_image_active');
	container.appendChild(list);
};
const hideList = () => {
	svg_image.classList.remove('svg_image_active');
	list.remove();
};

container.addEventListener('click',() => {
	if (svg_image.classList.contains('svg_image_active')) {
		hideList();
	} else {
		showList();
	}
});
document.addEventListener('click', (event) => {
	if (!container.contains(event.target)) {
		hideList();
	}
});
