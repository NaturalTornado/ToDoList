// newToDo.js - rev-7

import { ToDoItem } from './TDObject.js';

function createNewToDoItem(taskDescription = 'task description', dueDate, priority) {
    return new ToDoItem(taskDescription, dueDate, priority);
}

function renderNewToDoItem(toDoItem, index, removeCallback, saveToLocalStorageCallback) {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = toDoItem.isCompleted;
    checkbox.addEventListener('change', () => {
        toDoItem.toggleCompletion();
        if (typeof saveToLocalStorageCallback === 'function') {
            saveToLocalStorageCallback();
        }
    });

    const taskSpan = document.createElement('span');
    taskSpan.textContent = typeof toDoItem.taskDescription === 'string' && toDoItem.taskDescription.trim() !== '' 
        ? toDoItem.taskDescription 
        : 'task description'; // Correctly set default text
    taskSpan.contentEditable = true;
    taskSpan.addEventListener('input', (e) => {
        toDoItem.taskDescription = e.target.textContent;
    });

    taskSpan.addEventListener('blur', () => {
        if (typeof saveToLocalStorageCallback === 'function') {
            saveToLocalStorageCallback();
        }
    });

    // Create an input element for the due date
    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    dueDateInput.value = toDoItem.dueDate;
    dueDateInput.addEventListener('change', (e) => {
        toDoItem.dueDate = e.target.value;
        if (typeof saveToLocalStorageCallback === 'function') {
            saveToLocalStorageCallback();
        }
    });

    // Create a select element for priority
    const prioritySelect = document.createElement('select');
    const priorities = [
        { value: 'low', text: 'Low' },
        { value: 'medium', text: 'Medium' },
        { value: 'high', text: 'High' }
    ];

    priorities.forEach(priority => {
        const option = document.createElement('option');
        option.value = priority.value;
        option.textContent = priority.text;
        if (toDoItem.priority === priority.value) {
            option.selected = true;
        }
        prioritySelect.appendChild(option);
    });

    prioritySelect.addEventListener('change', (e) => {
        toDoItem.priority = e.target.value;
        if (typeof saveToLocalStorageCallback === 'function') {
            saveToLocalStorageCallback();
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        removeCallback(index);
        if (typeof saveToLocalStorageCallback === 'function') {
            saveToLocalStorageCallback();
        }
    });

    li.appendChild(checkbox);
    li.appendChild(taskSpan);
    li.appendChild(dueDateInput);
    li.appendChild(prioritySelect);
    li.appendChild(deleteButton);
    li.style.display = 'grid';
    li.style.gridTemplateColumns = 'auto 10fr 1fr 1fr 1fr';


    return li;
}

export { createNewToDoItem, renderNewToDoItem };
