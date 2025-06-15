import { AppState } from "../AppState.js";
import { api } from "../utils/Axios.js";


class WeatherService {

  async getTemp() {
    const res = await api.get('api/weather');
        console.log('🌡️🦮got temp!', res.data);
        let temp = res.data.main.temp;
        AppState.temp = temp;
        console.log('🌡️🦮 Temp in K', temp);
  }


}


export const weatherService = new WeatherService();