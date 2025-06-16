import { AppState } from "../AppState.js";
import { api } from "../utils/Axios.js";


class QuotesService {

  async getQuote() {
    const res = await api.get('api/quotes');
    // console.log('📨🦮got Quote!', res.data);
    let quote = res.data.quote;
    let author = res.data.author;
    AppState.quote = quote;
    AppState.author = author;
  }
}

export const quotesService = new QuotesService();