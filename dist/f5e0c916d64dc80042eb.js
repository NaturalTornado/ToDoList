// index.js - rev-13

import loadPage from './loadPage.js';
import ToDoListsManager from './ToDoLists.js';
import { createNewToDoItem } from './newToDo.js';
import { displayActiveToDoList } from './activeToDo.js';

document.addEventListener('DOMContentLoaded', () => {
    loadPage();

    const toDoListsManager = new ToDoListsManager();

    const newListButton = document.getElementById('NewList');
    const newToDoButton = document.getElementById('newToDo');

    const listOfLists = document.getElementById('ListOfLists');
    const activeTDItemTitle = document.querySelector('.activeTDItemTitle'); 

    const renderLists = () => {
        listOfLists.innerHTML = ''; 
        toDoListsManager.lists.forEach((list, index) => {
            const li = document.createElement('li');

            const span = document.createElement('span');

            const titleParagraph = document.createElement('span');
            titleParagraph.textContent = list.title;
            titleParagraph.contentEditable = true;
            titleParagraph.addEventListener('input', (e) => {
                list.title = e.target.textContent;
                saveToLocalStorage();
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', (event) => {
                event.stopPropagation(); 
                toDoListsManager.deleteList(index);
                renderLists();
                renderActiveList(); 
                saveToLocalStorage();
            });

            
            span.style.display = 'grid';
            span.style.gridTemplateColumns = '3fr 1fr';

            span.appendChild(titleParagraph);
            span.appendChild(deleteButton);
            li.appendChild(span);
            listOfLists.appendChild(li);
            

            li.addEventListener('click', () => {
                toDoListsManager.setActiveList(index);
                const activeTitleDiv = document.querySelector('.activeTDItemTitle');
                if (activeTitleDiv) {
                    activeTitleDiv.textContent = list.title;
                }
                renderActiveList();
            });

            if (index === toDoListsManager.activeListIndex) {
                const activeTitleDiv = document.querySelector('.activeTDItemTitle');
                if (activeTitleDiv) {
                    activeTitleDiv.textContent = list.title;
                }
            }
        });
    };

    const renderActiveList = () => {
        const activeList = toDoListsManager.getActiveList();
        if (!activeList) {
            console.error('No active list found');
            return; 
        }

        displayActiveToDoList(activeList, (itemIndex) => {
            activeList.removeItem(itemIndex);
            renderActiveList();
            saveToLocalStorage();
        });
    };

    newListButton.addEventListener('click', () => {
        const newListTitle = "New List";
        const newList = toDoListsManager.createList(newListTitle);

        const activeTitleDiv = document.querySelector('.activeTDItemTitle');
        const currentTitle = activeTitleDiv ? activeTitleDiv.textContent : '';
        
        renderLists();
        toDoListsManager.setActiveList(toDoListsManager.lists.length - 1);
        renderActiveList();

        if (activeTitleDiv) {
            activeTitleDiv.textContent = currentTitle;
        }
    });

    newToDoButton.addEventListener('click', () => {
        const activeList = toDoListsManager.getActiveList();
        if (!activeList) {
            console.error('No active list found when adding a new to-do item');
            return; 
        }
        const newToDoItem = createNewToDoItem({}, saveToLocalStorage);
        activeList.addItem(newToDoItem);
        renderActiveList();
        saveToLocalStorage();
    });

    const saveToLocalStorage = () => {
        toDoListsManager.saveListsToStorage();
    };

    renderLists();
    renderActiveList();
});
