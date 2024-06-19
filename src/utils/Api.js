import axios from 'axios';

class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _checkResponse(response) {
    if (response.status === 200) {
      return response.data;
    }

    return Promise.reject(`Ошибка: ${response.status}`);
  }

  getSuggestions(search) {
    return axios.get(`https://suggest-maps.yandex.ru/v1/suggest?apikey=0e42c64c-0045-4b29-ba5d-cb9f4001bc0a&types=locality&results=5&text=${search}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => this._checkResponse(res));
  }
}

const api = new Api({
  baseUrl: '',
});

export default api;
