import { AuthController } from "./Auth/AuthController.js"
import { TodosController } from "./controllers/TodosController.js";

class App {

  authController = new AuthController();

  todosController = new TodosController();

}

window['app'] = new App()


