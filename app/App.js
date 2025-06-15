import { AuthController } from "./Auth/AuthController.js"
import { SettingsController } from "./controllers/SettingsController.js";
import { TodosController } from "./controllers/TodosController.js";
import { WeatherController } from "./controllers/WeatherController.js";

class App {

  authController = new AuthController();
  todosController = new TodosController();
  weatherController = new WeatherController();
  settingsController = new SettingsController();
}

window['app'] = new App()


