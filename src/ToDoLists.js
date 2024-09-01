// toDoListModule.js

// Function to create a new to-do list item
function createToDoList(title) {
    // Create a new list item element
    const listItem = document.createElement('li');

    // Set up the title span
    const titleSpan = document.createElement('span');
    titleSpan.textContent = title;

    // Set up the complete checkbox
    const completeCheckbox = document.createElement('input');
    completeCheckbox.type = 'checkbox';
    completeCheckbox.addEventListener('change', () => {
        // Toggle the completion state (adds/removes a 'completed' class)
        listItem.classList.toggle('completed', completeCheckbox.checked);
    });


    // Set up the edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
        // Enable direct text editing within the span
        titleSpan.contentEditable = true;
        titleSpan.focus();

        // Save changes when the user presses Enter or blurs the input
        titleSpan.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                titleSpan.contentEditable = false;
            }
        });

        titleSpan.addEventListener('blur', () => {
            titleSpan.contentEditable = false;
        });
    });

/*
    // Set up the edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
        // Prompt the user for a new title
        const newTitle = prompt('Edit the title:', titleSpan.textContent);
        if (newTitle) {
            titleSpan.textContent = newTitle;
        }
    });
*/

    // Set up the trash button
    const trashButton = document.createElement('button');
    trashButton.textContent = 'Delete';
    trashButton.addEventListener('click', () => {
        // Remove the list item
        listItem.remove();
    });

    // Append all the elements to the list item
    listItem.appendChild(completeCheckbox);
    listItem.appendChild(titleSpan);
    listItem.appendChild(editButton);
    listItem.appendChild(trashButton);

    // Return the completed list item to be appended in the DOM
    return listItem;
}

export default createToDoList;
