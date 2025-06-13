import { api } from "../utils/Axios.js";


class TodosService {

  async getTodos() {
    const res = await api.get('api/todos');
    console.log('🗒️🦮got Todos!', res.data);

  }


}

export const todosService = new TodosService();