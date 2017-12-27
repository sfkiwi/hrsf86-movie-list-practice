var db = require('../../database');


module.exports = {

  movies: {

    selectAll: function () {
      return db.selectAll()

        .catch((err) => {
          console.error(err.message);
          throw 'Error accessing database';
        });
    },

    insertOne: function (movie) {

      let movieArray = [];
      movieArray[db.keys.id]          = movie.id;
      movieArray[db.keys.title]       = movie.title || null;
      movieArray[db.keys.year]        = movie.year || null;
      movieArray[db.keys.overview]    = movie.overview || null;
      movieArray[db.keys.rating]      = movie.rating || null;
      movieArray[db.keys.thumbnail]   = movie.thumbnail || null;
      movieArray[db.keys.genre]       = movie.genre || null;
      movieArray[db.keys.watched]     = movie.watched || 0;

      return db.insertOne(movieArray)

        .catch((err) => {
          console.error(err.message);
          throw 'Error inserting movie into database';
        });
    },

    insertMany: function(movies) {

      let moviesArray = movies.map((movie) => (
        [
          movie.id,
          movie.title || null,
          movie.year || null,
          movie.overview || null,
          movie.rating || null,
          movie.thumbnail || null,
          movie.genre || null,
          movie.watched || 0,
        ]
      ));

      console.log(moviesArray[0]);

      return db.insertMany(moviesArray)

        .catch((err) => {
          console.error(err.message);
          throw 'Error inserting movies into database';
        });
    },
  
    updateWatched: function(id, value) {

      return db.updateWatched(id, value)

        .catch((err) => {
          throw 'Error updating attribute of movie';
        })
    }
  }
};


