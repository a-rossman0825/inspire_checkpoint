import { AuthController } from "./Auth/AuthController.js"
import { BackgroundsController } from "./controllers/BackgroundsController.js";
import { ClockController } from "./controllers/ClockController.js";
import { QuotesController } from "./controllers/QuotesController.js";
import { SettingsController } from "./controllers/SettingsController.js";
import { TodosController } from "./controllers/TodosController.js";
import { WeatherController } from "./controllers/WeatherController.js";

class App {

  authController = new AuthController();
  todosController = new TodosController();
  weatherController = new WeatherController();
  settingsController = new SettingsController();
  clockController = new ClockController();
  backgroundsController = new BackgroundsController();
  quotesController = new QuotesController();
}

window['app'] = new App()


