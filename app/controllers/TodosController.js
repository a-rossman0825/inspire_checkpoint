import { AppState } from "../AppState.js";
import { todosService } from "../services/TodosService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";


export class TodosController {
  constructor() {
    // console.log("🗒️🎛️ Ready!");
    AppState.on("identity", this.getTodos);
    AppState.on('completedTodo', this.getTodos);
    AppState.on("todos", this.drawTodos.bind(this));
    AppState.on("todos", this.drawTodoCount.bind(this));
  }

  async getTodos() {
    try {
      await todosService.getTodos();
    } catch (error) {
      Pop.error(error, "Failure:", "Could not get Todos");
      console.error("🗒️🎛️ getTodos failed", error);
    }
  }

  changeArrow() {
    const arrowElm = document.getElementById('arrow');
    if (arrowElm.classList.contains('mdi-arrow-left-drop-circle-outline')) {
      arrowElm.classList.replace('mdi-arrow-left-drop-circle-outline', 'mdi-arrow-right-drop-circle-outline')
    } else {
      arrowElm.classList.replace('mdi-arrow-right-drop-circle-outline', 'mdi-arrow-left-drop-circle-outline')
    }
  }

  changeBoolean(todoId) {
    console.log();
    
    todosService.changeBoolean(todoId);
  }

  async drawTodos() {
    const todos = AppState.todos;
    let content = '';
    const todoElm = document.getElementById('todo-list');
    todos.forEach((todo) => {
      content += todo.todoListHTMLTemp;
    })
    todoElm.innerHTML = content;
    // console.log('drewTodos!');
  }

  drawTodoCount() {
    const todosCount = AppState.todos.filter((todo) => todo.completed == false);
    let content = todosCount.length.toString();
    const todosCountElm = document.getElementById('todos-count');
    if (todosCount.length !== 1) {
      todosCountElm.innerText = `${content} Todos Remaining`;
    } else {
      todosCountElm.innerText = `${content} Todo Remaining`;
    }
  }

  async addTodo() {
    try {
      event.preventDefault();
      const formElm = event.target;
      const formData = getFormData(formElm);
      // console.log('🗒️🎛️ added Todo Form', formData);
      await todosService.addTodos(formData);
      // @ts-ignore
      document.getElementById('todo-create').value = '';
    } catch (error) {
      Pop.error(error, "Failure:", "Could not add Todo");
      console.error("🗒️🎛️ addTodos failed", error);
    }
  }

  async confirmTodoDelete(todoId) {
    const confirm = await Pop.confirm('Are you sure you want to delete this todo??', 'It will be expelled out into the void, forever!', 'Yeah, delete it!', 'No, actually I still need to do this thing');

    if (!confirm) {
      return
    }

    try {
      // console.log('🗒️🎛️🗑️Deleting Todo!', todoId);
      await todosService.deleteTodo(todoId);
    } catch (error) {
      Pop.error(error, "Failure:", "Could not delete Todo");
      console.error("🗒️🎛️🗑️ deleteTodos failed", error);
    }
  }


}