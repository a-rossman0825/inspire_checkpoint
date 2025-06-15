import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";

export class WeatherController {
  constructor() {
    AppState.on('identity', this.getTemp);
  }

  async getTemp() {
    try {
      weatherService.getTemp();
    } catch (error) {
      Pop.error(error, "Failure:", "Could not get Temp");
      console.error("🌡️🎛️ getTodos failed", error);
    }
  }

  //   degreesC() {
    
  // }

  // degreesF() {
  //   return (this.temp -273.15) * 1.8 + 32;
  // }
}