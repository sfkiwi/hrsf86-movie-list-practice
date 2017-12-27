/*
* This Test file is provided to you to be able to be able to test your database functions independently
* of the rest of your application. You will need to build out the db function inside of /database/index.js
* That file is required here below and you will use the exported functions here to test.
* You may run this file by simply going to a terminal window and typing 'node databaseTests.js'
*/

const movieDB = require('../index.js');


let movies = [
  [1, 'star wars', '2017', 'overview of movie', 5.89, 'http://image.com', 'Action', false],
  [2, 'Mean Girls', '2017', 'overview of movie', 5.6, 'http://image.com', 'Drama', false],
  [3, 'Blade Runner', '2017', 'overview of movie', 5.6, 'http://image.com', 'Sci-fi', false],
  [4, 'Empire Strikes Back', '2017', 'overview of movie', 5.6, 'http://image.com', 'Sci-fi', true],
  [5, 'Return of the Jedi', '2017', 'overview of movie', 5.6, 'http://image.com', 'Sci-fi', false],
  [6, 'Idiocracy', '2017', 'overview of movie', 5.6, 'http://image.com', 'Comedy', false],
  [7, 'Feris Buellers Day Off', '2017', 'overview of movie', 5.6, 'http://image.com', 'Comedy', true],
  [8, 'Breakfast Club', '2017', 'overview of movie', 5.6, 'http://image.com', 'Comedy', false],
  [9, 'Once were Warriors', '2017', 'overview of movie', 5.6, 'http://image.com', 'Drama', false],
  [10, 'Full Metal Jacket', '2017', 'overview of movie', 5.6, 'http://image.com', 'Action', false],
  [11, 'Apocalypse Now', '2017', 'overview of movie', 5.6, 'http://image.com', 'Action', false],
];

let newMovie = [12, 'Dukes of Hazzard', '2017', 'overview of movie', 5.6, 'http://image.com', 'Action', false];

//duplicate id but with different rating
let duplicateMovie = [12, 'A different movie', '2017', 'overview of movie', 7.0, 'http://image.com', 'Action', false];

Promise.all([
  //Insert multiple movies into database
  movieDB.insertMany(movies).then(() => console.log('Inserted movies into DB')),

  //retrieve all entries from movie database
  movieDB.selectAll().then(movies => console.log('Retrieves Movies from DB', movies)),
  
  //insert one entry into database
  movieDB.insertOne(newMovie).then(() => console.log('Inserted a movie into the DB')),

  //retrieve single movie from database by title
  movieDB.selectOne(newMovie[movieDB.keys.title]).then(movie => console.log('Retrieved single movie', movie)),

  //insert a duplicate entry to check update on duplicate key
  movieDB.insertOne(duplicateMovie)
    .then(() => (movieDB.selectOne(duplicateMovie[movieDB.keys.title])))
    .then(movie => console.log(movie))
])

  .then(() => {
    console.log('Completed all tests');
    console.log('Cleaning up');
    movieDB.end();

  })
  
  .catch((...err) => {
    console.log(err);
    movieDB.end();
  });
