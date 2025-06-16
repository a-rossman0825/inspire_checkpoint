import { AppState } from "../AppState.js";
import { api } from "../utils/Axios.js";
import { saveState } from "../utils/Store.js";


class WeatherService {

  async getTemp() {
    const res = await api.get('api/weather');
        console.log('🌡️🦮got temp!', res.data);
        let temp = res.data.main.temp;
        AppState.temp = temp;
        console.log('🌡️🦮 Temp in K', temp);
  }

  toggleWeather(scale) {
    if (scale == 'c') {
      AppState.tempSet = 'c';
    } else if (scale == 'f'){
      AppState.tempSet = 'f';
    } else if (scale == 'toggle'){
      if (AppState.tempSet == 'c') {
        AppState.tempSet = 'f';
      } else {
        AppState.tempSet = 'c';
      }
    }
    saveState('tempSet', AppState.tempSet);
  }

}


export const weatherService = new WeatherService();