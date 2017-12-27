const api = require('../config/movieapi_key');
const http = require('axios');

//api.key;
http.defaults.baseURL = 'https://api.themoviedb.org/3';
http.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

var count = 1;

module.exports = {


  load: function() {
    return new Promise((resolve, reject) => {

      return http.get('/movie/now_playing', {
        params: {
          api_key: api.key,
          language: 'en-US',
          include_adult: 'false',
          region: 'US',
          page: count++
        }
      })

        .then((response) => {

          let config = module.exports.config;
          let genres = module.exports.genres;

          let movies = response.data.results.map((movie) => {
            return {
              id: movie.id,
              title: movie.title,
              rating: movie.vote_average,
              thumbnail: config.images.base_url +
                config.images.poster_sizes[2] +
                movie.poster_path,
              year: movie.release_date.slice(0,4),
              overview: movie.overview,
              genre: genres[movie.genre_ids[0]]
            }
          });

          resolve(movies);
        })

        .catch((error) => {
          console.error(error);
        });
    });
  },

  getMovieDetails: function(title) {
    return new Promise((resolve, reject) => {

      console.log(title);

      return http.get('/search/movie', {
        params: {
          api_key: api.key,
          query: title,
          language: 'en-US',
          include_adult: 'false',
        }
      })

        .then((results) => {

          if (results.data.results) {

            let config = module.exports.config;
            let genres = module.exports.genres;

            let result = results.data.results[0];

            let movie = {
              id: result.id,
              title: result.title,
              rating: result.vote_average,
              thumbnail: config.images.base_url + 
              config.images.poster_sizes[2] + 
              result.poster_path,
              year: result.release_date.slice(0,4),
              genre: genres[result.genre_ids[0]],
              overview: result.overview
            };

            resolve(movie);
          } else {
            reject(new Error('Unable to retrieve movie information'));
          }
        })

        .catch((error) => {
          console.error(error);
        });
    });
  },

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

//Load genres on startup
(function () {
  http.get('/genre/movie/list', {
    params: {
      api_key: api.key,
      language: 'en-US'
    }
  })

    .then((results) => {
      //convert array into id/name mapping
      module.exports.genres = {};
      results.data.genres.forEach((genre) => {
        module.exports.genres[genre.id] = genre.name;  
      });
    })

    .catch(console.error.bind(console));
})();