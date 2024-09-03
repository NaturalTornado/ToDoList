// TDObject.js

class ToDoItem {
    constructor(taskDescription = "task description", dueDate = new Date().toISOString().split('T')[0], priority = "Low") {
        this.taskDescription = taskDescription;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isCompleted = false;
    }

    toggleCompletion() {
        this.isCompleted = !this.isCompleted;
    }
}

class ToDoList {
    constructor(title) {
        this.title = title;
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(index) {
        this.items.splice(index, 1);
    }
}

export { ToDoItem, ToDoList };
