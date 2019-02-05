export const API_URL = 'http://api.icndb.com';
export const TYPE = 'jokes';

//1 joke with ID http://api.icndb.com/jokes/15
//number of jokes http://api.icndb.com/jokes/random/3

const getUrl = (url, params) => `${API_URL}/${TYPE}/${url}` + (params ? `&${params}` : '');

const api = {
  getRandomJokes(limit){
    let url = `random/${limit}`;
    return fetch(getUrl(url))
      .then((response) => response.json())
      .then(function (result) {
        return result;
      })
      .catch(e => {
        return e;
    });
  },

  getJoke(id) {
    let url = `${id}`;
    return fetch(getUrl(url))
      .then((response) => response.json())
      .then(function (result) {
        return result;
      })
      .catch(e => {
        return e;
    });
  }

}

export default api;