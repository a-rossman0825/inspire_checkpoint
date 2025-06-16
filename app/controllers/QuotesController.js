import { AppState } from "../AppState.js";
import { quotesService } from "../services/QuotesService.js";
import { Pop } from "../utils/Pop.js";


export class QuotesController {
  constructor() {
    AppState.on('identity', this.getQuote);
    AppState.on('author', this.drawQuote);
  }

  async getQuote() {
      try {
        quotesService.getQuote();
      } catch (error) {
        Pop.error(error, "Failure:", "Could not get quote");
        console.error("📨🎛️ getQuote failed", error);
      }
    }

    drawQuote() {
      const quoteElm = document.getElementById('quote');
      const authorElm = document.getElementById('author');
      const authSetElm = document.getElementById('author-display');
      let quote = `"${AppState.quote}"`;
      let author = AppState.author;
      quoteElm.innerText = quote;
      authorElm.innerText = author;
      authSetElm.innerText = author;
    }
}