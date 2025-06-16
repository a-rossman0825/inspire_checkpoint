import { AppState } from "../AppState.js";


class ClockService {

  updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    AppState.hours = hours;
    AppState.minutes = minutes;
  }

}

export const clockService = new ClockService();