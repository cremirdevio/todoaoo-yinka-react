class Todo {
    constructor (name) {
        this.name = name;
        this.todoList = [{
            title: "Learn a new language",
            id: 1,
            isCompleted: false,
          },];
        this.lastId = 0;
    }

    addItemToList(todoTitle) {
        const todoObj = {
            title: todoTitle,
            id: ++this.lastId,
            isCompleted: false,
        };

        this.todoList.push(todoObj);
    }

    getTodoList() {
        return this.todoList;
    }

    toggleTodoStatus() {
        
    }
}

export default Todo;