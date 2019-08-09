const classNames = {
	TODO_ITEM: 'todo-container',
	TODO_CHECKBOX: 'todo-checkbox',
	TODO_TEXT: 'todo-text',
	TODO_DELETE: 'todo-delete'
};

const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');

function newTodo() {
	const userInput = prompt('New TODO text');
	if (userInput != null) {
		if (userInput === '') {
			alert('The TODO text should not be empty');
		} else {
			const todoContainer = document.createElement('li');
			todoContainer.className = classNames.TODO_ITEM;
			const todoText = document.createElement('span');
			todoText.className = classNames.TODO_TEXT;
			todoText.innerText = userInput;
			todoContainer.append(todoText);
			const todoCheckBox = document.createElement('input');
			todoCheckBox.setAttribute('type', 'checkbox');
			todoCheckBox.className = classNames.TODO_CHECKBOX;
			todoCheckBox.addEventListener('click', counts);
			todoContainer.prepend(todoCheckBox);
			const todoDelete = document.createElement('button');
			todoDelete.className = classNames.TODO_DELETE;
			todoDelete.innerHTML = '&times;';
			//todoDelete.onclick = 'deleteTodo()';
			todoDelete.addEventListener('click', deleteTodo);
			todoContainer.append(todoDelete);
			list.append(todoContainer);
			/*todoContainer.innerHTML = `
      <input type="checkbox" class="${classNames.TODO_CHECKBOX}" onClick="counts()">
        <span class"${classNames.TODO_TEXT}">
        ${userInput}
        </span>
        <button class="${classNames.TODO_DELETE}"  onClick="deleteTodo(this)">&times;</button>
      `;*/
			list.append(todoContainer);
			counts();
		}
	}
}

function deleteTodo(ev) {
	if (confirm('Are you sure?')) {
		ev.target.parentNode.remove();
		counts();
	}
}
function counts() {
	itemCount();
	uncheckedCount();
}
function itemCount() {
	itemCountSpan.textContent = document.querySelectorAll('.' + classNames.TODO_ITEM).length;
}

function uncheckedCount() {
	uncheckedCountSpan.innerText = document.querySelectorAll('.' + classNames.TODO_CHECKBOX + ':not(:checked)').length;
}
