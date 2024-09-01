

import loadPage from "./loadPage.js";
import createToDoList from './ToDoLists.js';

import { setActiveList } from './newToDo.js';

document.addEventListener('DOMContentLoaded', () => {
    loadPage();
    const newListBtn = document.getElementById('NewList'); // Button to create a new list
    const listOfLists = document.getElementById('ListOfLists'); // The list where new lists will be added

    // Add event listener to the "New List" button
    newListBtn.addEventListener('click', () => {
        // Create a new to-do list item with the default title "Title"
        const newListItem = createToDoList('Title');

        // Make the title immediately editable by replacing the title span with an input field
        const titleSpan = newListItem.querySelector('span');
        const titleInput = document.createElement('input');
        titleInput.type = 'text';
        titleInput.value = titleSpan.textContent; // Set the input field value to the current title
        titleSpan.replaceWith(titleInput); // Replace the span with the input field

        // Save the new title when the user exits the input field
        titleInput.addEventListener('blur', () => {
            titleSpan.textContent = titleInput.value || 'Title'; // Update the title or keep "Title" if input is empty
            titleInput.replaceWith(titleSpan); // Replace the input field with the updated span
        });

        // Append the new list item to the list
        listOfLists.appendChild(newListItem);

        // Focus the input field to allow immediate editing
        titleInput.focus();
    });
});
