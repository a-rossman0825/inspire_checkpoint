import { AppState } from "../AppState.js";
import { backgroundsService } from "../services/BackgroundsService.js";
import { Pop } from "../utils/Pop.js";


export class BackgroundsController {
  constructor() {
    AppState.on('identity', this.getBG);
    AppState.on('bgImage', this.drawBG);
  }

  async getBG() {
      try {
        backgroundsService.getBG();
      } catch (error) {
        Pop.error(error, "Failure:", "Could not get BG Image");
        console.error("📸🎛️ getBG failed", error);
      }
    }
  
  drawBG() {
    const bgImg = AppState.bgImage;
    const artist = AppState.bgArtist;
    const imgDesc = AppState.bgDesc;
    const bodyElm = document.getElementById('body');
    const artistElm = document.getElementById('artist-name');
    const imgDescElm = document.getElementById('img-desc');
    bodyElm.style.backgroundImage = `url(${bgImg})`;
    artistElm.innerText = `${artist}`;
    imgDescElm.innerText = `${imgDesc}`;
  }
}