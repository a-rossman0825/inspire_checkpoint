import { AppState } from "../AppState.js";
import { clockService } from "../services/ClockService.js";


export class ClockController {
  constructor() {
    const updateTime = this.updateTime;
    setInterval(updateTime, 60000);
    this.updateTime();
    AppState.on('clockSet', this.updateTime);
    AppState.on('clockSet', this.drawClockbtns);
    this.drawClockbtns();
    
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

  changeClockSet(disp) {
    clockService.changeClockSet(disp);
  }

  drawClockbtns() {
    let standardElm = document.getElementById('standard-btn');
    let militaryElm = document.getElementById('military-btn');
    if (AppState.clockSet == 'standard') {
      standardElm.classList.remove('bg-dark', 'text-secondary');
      standardElm.classList.add('bg-light', 'text-black');
      militaryElm.classList.add('bg-dark', 'text-secondary');
      militaryElm.classList.remove('bg-light', 'text-black');
    } else {
      standardElm.classList.add('bg-dark', 'text-secondary');
      standardElm.classList.remove('bg-light', 'text-black');
      militaryElm.classList.remove('bg-dark', 'text-secondary');
      militaryElm.classList.add('bg-light', 'text-black');
    }
  }

  
}