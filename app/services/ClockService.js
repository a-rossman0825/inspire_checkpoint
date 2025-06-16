import { AppState } from "../AppState.js";


class ClockService {

  updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    AppState.hours = hours;
    AppState.minutes = minutes;
  }

  changeClockSet(disp) {
    if (disp == 'standard') {
      AppState.clockSet = 'standard';
    } else {
      AppState.clockSet = 'military';
    }
  }

}

export const clockService = new ClockService();