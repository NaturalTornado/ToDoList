// ToDoLists.js - rev-2

import { ToDoList } from './TDObject.js';

class ToDoListsManager {
    constructor() {
        this.lists = this.loadListsFromStorage();
        this.activeListIndex = 0; // Track the active list
    }

    createList(title) {
        const newList = new ToDoList(title);
        this.lists.push(newList);
        this.saveListsToStorage();
        return newList;
    }

    deleteList(index) {
        this.lists.splice(index, 1);
        this.saveListsToStorage();
    }

    setActiveList(index) {
        this.activeListIndex = index;
        this.saveListsToStorage();
    }

    getActiveList() {
        return this.lists[this.activeListIndex];
    }

    loadListsFromStorage() {
        const storedLists = localStorage.getItem('toDoLists');
        return storedLists ? JSON.parse(storedLists).map(list => Object.assign(new ToDoList(), list)) : [];
    }

    saveListsToStorage() {
        localStorage.setItem('toDoLists', JSON.stringify(this.lists));
    }
}

export default ToDoListsManager;
