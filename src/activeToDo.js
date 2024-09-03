// activeToDo.js - rev-2

import { renderNewToDoItem } from './newToDo.js';

function displayActiveToDoList(toDoList, removeItemCallback) {
    const activeToDoItemsDiv = document.getElementById('ActiveToDoItems');
    activeToDoItemsDiv.innerHTML = ''; // Clear previous content

    const ul = document.createElement('ul');
    ul.id = 'ActiveTDItemList';

    toDoList.items.forEach((item, index) => {
        const li = renderNewToDoItem(item, index, removeItemCallback);
        ul.appendChild(li);
    });

    activeToDoItemsDiv.appendChild(ul);
}

export { displayActiveToDoList };
