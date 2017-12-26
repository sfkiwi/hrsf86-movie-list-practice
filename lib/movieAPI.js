const api = require('../config/movieapi_key');
const http = require('axios');

//api.key;
http.defaults.baseURL = 'https://api.themoviedb.org/3';
http.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';


module.exports = {

  load: function(title) {
    return new Promise((resolve, reject) => {

      return http.get('/search/movie', {
        params: {
          api_key: api.key,
          query: title,
          language: 'en-US',
          include_adult: 'false',
        }
      })

        .then((results) => {

          let config = module.exports.config;
          let result = results.data.results[0];

          let movie = {
            id: result.id,
            title: result.title,
            details: {
              popularity: result.popularity,
              thumbnail: config.images.base_url + 
              config.images.backdrop_sizes[2] + 
              result.poster_path,
              year: result.release_date,
              description: result.overview
            }
          };

          resolve(movie);
        })

        .catch((error) => {
          console.error(error);
        });
    });
  }
};

//Load Config data on startup
(function () {
  http.get('/configuration', {
    params: {
      api_key: api.key
    }
  })

    .then((results) => {
      module.exports.config = results.data;
    })

    .catch(console.error.bind(console));
})();