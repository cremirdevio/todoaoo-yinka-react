class Todo {
    constructor (name) {
        this.name = name;
        this.todoList = [{
            title: "Learn a new language",
            id: 1,
            isCompleted: false,
          },];
        this.lastId = 1;
    }

    /** Create Todo */
    addItemToList(todoTitle) {
        const todoObj = {
            title: todoTitle,
            id: ++this.lastId,
            isCompleted: false,
        };

        this.todoList.push(todoObj);
    }

    /** Read Todo */
    getTodoList() {
        return this.todoList;
    }

    // this.todolist = 122334 [a] -> [a,b]
    // this.todolist = 122334

    /** Update Todo */
    toggleTodoStatus(id) {
        const foundIndex = this.todoList.findIndex((todoItem) => {
            return todoItem.id === id;
        });

        if (foundIndex === -1) throw new Error(`Todo with index ${id} not found.`)

        console.log(foundIndex, id)
        // Get the element in that position
        const todoItem = this.todoList[foundIndex];

        todoItem.isCompleted = !todoItem.isCompleted;
        console.log(this.todoList, 'latest')
    }
}

export default Todo;

