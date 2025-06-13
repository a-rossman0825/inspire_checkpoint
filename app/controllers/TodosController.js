import { AppState } from "../AppState.js";
import { todosService } from "../services/TodosService.js";
import { Pop } from "../utils/Pop.js";


export class TodosController {
  constructor() {
    console.log("🗒️🎛️ Ready!");
    AppState.on("identity", this.getTodos);
    AppState.on("todos", this.drawTodos);
  }

  async getTodos() {
    try {
      await todosService.getTodos();
    } catch (error) {
      Pop.error(error, "Failure:", "Could not get Todos");
      console.error("🗒️🎛️ getTodos failed", error);
    }
  }

  async drawTodos() {
    const todos = AppState.todos;
    let todosContent = '';
    todos.forEach((todo) => todosContent += todo.todoListHTMLTemplate);
    const todoElm = document.getElementById('todo-list');
    todoElm.innerHTML = todosContent;
    console.log('drewTodos!');
  }


}