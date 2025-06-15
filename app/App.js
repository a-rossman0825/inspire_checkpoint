import { AuthController } from "./Auth/AuthController.js"
import { SettingsController } from "./controllers/SettingsController.js";
import { TodosController } from "./controllers/TodosController.js";

class App {

  authController = new AuthController();

  todosController = new TodosController();
  
  settingsController = new SettingsController();
}

window['app'] = new App()


