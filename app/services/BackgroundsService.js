import { AppState } from "../AppState.js";
import { api } from "../utils/Axios.js";


class BackgroundsService {

  async getBG() {
    const res = await api.get('api/images');
            // console.log('📸🦮got BG!', res.data);
            let bgImg = res.data.imgUrls.full;
            let bgArtist = res.data.attribution;
            let bgDesc = res.data.description;
            // console.log('📸🦮 bg Data', bgImg, bgArtist, bgDesc);
            AppState.bgArtist = bgArtist;
            AppState.bgDesc = bgDesc;
            AppState.bgImage = bgImg;
          }

}

export const backgroundsService = new BackgroundsService();