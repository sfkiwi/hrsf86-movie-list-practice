var movies = [
  {
    id: 1,
    title: 'Mean Girls',
    details: {
      year: 2004,
      runtime: 182,
      metascore: 66,
      imdb: 'http://www.imdb.com/title/tt0377092/?ref_=nv_sr_1',
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjE1MDQ4MjI1OV5BMl5BanBnXkFtZTcwNzcwODAzMw@@._V1_UY268_CR3,0,182,268_AL_.jpg'
    },
    watched: false
  },
  {
    id: 2,
    title: 'Hackers',
    details: {
      year: 1995,
      runtime: 107,
      metascore: 46,
      imdb: 'http://www.imdb.com/title/tt0113243/?ref_=nv_sr_1',
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BODg0NjQ5ODQ3OF5BMl5BanBnXkFtZTcwNjU4MjkzNA@@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    watched: false
  },
  {
    id: 3,
    title: 'The Grey',
    details: {
      year: 2011,
      runtime: 117,
      metascore: 64,
      imdb: 'http://www.imdb.com/title/tt1601913/?ref_=nv_sr_1',
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDY4MTQwMzc1MV5BMl5BanBnXkFtZTcwNzcwNTM5Ng@@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    watched: false
  },
  {
    id: 4,
    title: 'Sunshine',
    details: {
      year: 2007,
      runtime: 107,
      metascore: 64,
      imdb: 'http://www.imdb.com/title/tt0448134/?ref_=nv_sr_3',
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5Nzg2OTk2NF5BMl5BanBnXkFtZTYwNTc1ODM3._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    watched: false
  },
  {
    id: 5,
    title: 'Ex Machina',
    details: {
      year: 2014,
      runtime: 108,
      metascore: 78,
      imdb: 'http://www.imdb.com/title/tt0470752/?ref_=nv_sr_1',
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    watched: false
  }
];

module.exports = {

  movies: {

    get: function () {
      return new Promise((resolve, reject) => {
        console.log('Fetching All Movies');
        resolve(movies);
      });
    },

    post: function (movie) {
      return new Promise((resolve, reject) => {

        console.log(movie);

        if (!movie.title) {
          console.error('Invalid movie object', movie);
          reject(new Error('Invalid movie object'));
          return;
        }

        movie.watched = false;
        movies.push(movie);
        resolve(movie);

        console.log('Posting a new movie');
      });
    }
  },

  load: {

    post: function () {
      return new Promise((resolve, reject) => {
        console.log('Making API request');
        resolve();
      });
    }
  }
};
