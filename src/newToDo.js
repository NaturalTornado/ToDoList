// newToDo.js

function setActiveList(listTitle) {
    const activeToDos = document.getElementById('activeToDos');
    activeToDos.innerHTML = '';  // Clear previous content

    // Create the header for the active list
    const header = document.createElement('h3');
    header.textContent = listTitle;
    activeToDos.appendChild(header);

    // Create the list for tasks
    const taskList = document.createElement('ul');
    activeToDos.appendChild(taskList);

    // Function to add a new task
    function addTask(taskName) {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskName;
        taskList.appendChild(taskItem);
    }

    return { addTask };
}

export { setActiveList };


/*
function newToDo () {

//object properties:
// - priority
//      - can be edited if the edit button is clicked.
//      - if changed to a higher priority it bumps all items at and below the new priority down by one. 
//      - the priority list item should default to one, or the last item on the list. 
// - task description
// - edit 
//      - stores as boolean variable. when true you can edit the priority and task description    
// - trash button
// - complete button

// properties are here:    
    const priority = 1;
    const taskDescription = '';
    const completeTF = 'false';
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');


    editButton.addEventListener('click', () => {


    });

    deleteButton.addEventListener('click',() => {


    });
    

    const newTDBox = document.createElement('div');  
    
    newTDBox



};

*/


