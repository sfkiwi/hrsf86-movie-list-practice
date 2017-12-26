const model = require('../model');
const movies = require('../../lib/movieAPI');

module.exports = {
  
  movies: {
    
    get: function(req, res) {

      model.movies.get()

        .then((movies) => {
          res.status(200).send(movies);
        })

        .catch((err) => {
          res.status(400).send('Bad Request');
        });
    },

    post: function(req, res) {
      console.log(req.body);
      model.movies.post(req.body)

        .then((movie) => {
          res.status(200).send(movie);
        })

        .catch((err) => {
          console.error(err.message);
          res.status(400).send('Bad Request');
        });
    }
  },

  load: {
    
    get: function(req, res) {

      movies.load()

        .then(model.load.post)

        .then(() => {
          res.status(200).end();
        })

        .catch((err) => {
          res.status(400).send('Bad Request');
        });
    } 
  }
};
