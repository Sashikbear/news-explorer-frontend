import { getDays } from './getDays';
class NewsApi {
  constructor(baseUrl, apiKey) {
    this._baseUrl = baseUrl;
    this._apiKey = apiKey;
    const date = new Date();
    this._todaysDate = getDays(date, 0);
    this._fromDate = getDays(date, 7);
  }

  _handleResponse = (res) =>
    res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);

  getNews = (param) => {
    return fetch(
      `${this._baseUrl}?q=${param}&from=${this._fromDate}&to=${this._todaysDate}&sortedBy=publishedAt&pageSize=100&apiKey=${this._apiKey}`,
      { headers: this._headers }
    ).then(this._handleResponse);
  };
}

export const newsApi = new NewsApi(
  'https://newsapi.org/v2/everything',
  '26b83ad25fb749fab2eaf148a5b3bcc7'
);

export const newsProxyApi = new NewsApi(
  'https://nomoreparties.co/news/v2/everything',
  '26b83ad25fb749fab2eaf148a5b3bcc7'
);
