import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";

export class WeatherController {
  constructor() {
    AppState.on('identity', this.getTemp);
    AppState.on('temp', this.drawTemp);
    AppState.on('tempSet', this.drawTemp);
    AppState.on('tempSet', this.drawTempBtns);
    this.drawTempBtns();
  }

  async getTemp() {
    try {
      weatherService.getTemp();
    } catch (error) {
      Pop.error(error, "Failure:", "Could not get Temp");
      console.error("🌡️🎛️ getTemp failed", error);
    }
  }

  changeWeatherSet(scale) {
    weatherService.toggleWeather(scale);
  }



  drawTemp() {
    let scale = AppState.tempSet;
    let tempElm = document.getElementById("temperature");

    if (scale == 'c') {
      tempElm.innerText = `${(AppState.temp - 273.15).toFixed(0)}\u00b0C`
    } else {
      tempElm.innerText = `${((AppState.temp - 273.15) * 1.8 + 32).toFixed(0)}\u00b0F`
    }
  }

  drawTempBtns() {
    let celsiusElm = document.getElementById('c-btn');
    let fahrElm = document.getElementById('f-btn');
    if (AppState.tempSet == 'c') {
      celsiusElm.classList.remove('bg-dark', 'text-secondary');
    celsiusElm.classList.add('bg-light', 'text-black');
    fahrElm.classList.add('bg-dark', 'text-secondary');
    fahrElm.classList.remove('bg-light', 'text-black');
  } else {
    celsiusElm.classList.add('bg-dark', 'text-secondary');
    celsiusElm.classList.remove('bg-light', 'text-black');
    fahrElm.classList.remove('bg-dark', 'text-secondary');
    fahrElm.classList.add('bg-light', 'text-black');
    }
  }
  
}