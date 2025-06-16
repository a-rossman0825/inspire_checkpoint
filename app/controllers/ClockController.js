import { AppState } from "../AppState.js";
import { clockService } from "../services/ClockService.js";


export class ClockController {
  constructor() {
    const updateTime = this.updateTime;
    setInterval(updateTime, 60000);
    this.updateTime();
  }

  updateTime() {
    clockService.updateTime();
    const clockElm = document.getElementById('clock');
    const hours = AppState.hours;
    const minutes = AppState.minutes.toString().padStart(2, '0');
    if (AppState.clockSet == 'military') {
      clockElm.innerText = `${hours}:${minutes}`;
    } else {
      const hour = hours % 12 || 12;
      if (hours >= 12) {
        clockElm.innerText = `${hour}:${minutes}pm`;
      } else {
        clockElm.innerText = `${hour}:${minutes}am`;
      }
    }
  }
}