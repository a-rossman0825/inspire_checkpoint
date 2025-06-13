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


}

export const todosService = new TodosService();