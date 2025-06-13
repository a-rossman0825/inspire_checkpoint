import { AppState } from "../AppState.js";
import { todosService } from "../services/TodosService.js";
import { Pop } from "../utils/Pop.js";


export class TodosController {
  constructor() {
    console.log("🗒️🎛️ Ready!");
    AppState.on("identity", this.getTodos);
  }

  async getTodos() {
    try {
      await todosService.getTodos();
    } catch (error) {
      Pop.error(error, "Failure:", "Could not get Todos");
      console.error("🗒️🎛️ getTodos failed", error);
    }
  }

}