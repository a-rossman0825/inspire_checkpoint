import { AppState } from "../AppState.js";
import { Todo } from "../models/Todo.js";
import { api } from "../utils/Axios.js";


class TodosService {

  async getTodos() {
    const res = await api.get('api/todos');
    console.log('🗒️🦮got Todos!', res.data);
    const todos = res.data.map(pojo => new Todo(pojo));
    AppState.todos = todos;
  }

  async changeBoolean(todoId) {
    let thisTodo = AppState.todos.find((todo) => todoId == todo.id);
    console.log('🗒️🦮 Found todo id', thisTodo);
      if (thisTodo.completed === true) {
        thisTodo.completed = false;
      } else {
        thisTodo.completed = true;
      }
      const res = await api.put(`api/todos/${todoId}`, thisTodo);
      console.log('🗒️🦮📡Put Putted thisTodo Put', res.data);
      AppState.completedTodo = thisTodo;
  }

  async addTodos(formData) {
    const res = await api.post('api/todos', formData);
    console.log('🗒️🦮 Posted todo', res.data);
    const newTodo = new Todo(res.data);
    AppState.todos.push(newTodo);

  }

  async deleteTodo(todoId) {
    const res = await api.delete(`api/todos/${todoId}`);
    console.log('🗒️🦮🗑️ DELETED TODO', res.data);
    const todos = AppState.todos;
    const todoI = todos.findIndex((todo) => todo.id == todoId);
    todos.splice(todoI, 1);
  }

}

export const todosService = new TodosService();