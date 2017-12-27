
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'movies'
});

db.connect();


const keys = {
  id: 0,
  title: 1,
  year: 2,
  overview: 3,
  rating: 4,
  thumbnail: 5,
  genre: 6,
  watched: 7
};

const selectAllQuery = `
select * from movies`;

const selectOneQuery = `
select * from movies where title=?`;


const insertOneQuery = `
insert into 
  movies (
    id,
    title, 
    year,
    overview,
    rating,
    thumbnail,
    genre,
    watched
  )
values (?,?,?,?,?,?,?,?)
on duplicate key update id=id`;


const deleteAllQuery = `delete from movies`;


module.exports = {
  //returns an array of movie arrays
  selectAll: function () {
    return new Promise((resolve, reject) => {

      db.query(selectAllQuery, (err, res) => {
        if (err) {
          reject(new Error('Error retrieving movies from Database'));
          return;
        }

        resolve(res);
      })
    });
  },

  selectOne: function(title) {
    return new Promise((resolve, reject) => {

      db.query(selectOneQuery, [title], (err, res) => {
        if (err) {
          reject(new Error('Error retrieving movie from Database'));
          return;
        }

        resolve(res);
      })
    });
  },

  //takes a movie array
  insertOne: function (movie) {
    return new Promise((resolve, reject) => {

      db.query(insertOneQuery, movie, (err, res) => {
        if (err) {
          reject(new Error('Error inserting movie into Database' + err.message));
          return;
        }

        resolve();

      })
    })
  },

  //takes an array of movie arrays
  insertMany: function (movies) {

    return Promise.all(movies.map((movie) => (
      module.exports.insertOne(movie)
    )));
  },

  updateWatched: function (id, value) {
    const updateQuery = `update movies set watched=${value} where id=${id}`;

    return new Promise((resolve, reject) => {
      db.query(updateQuery, (err, res) => {
        if (err) {
          reject(new Error('Error updating watched value'));
          return;
        }

        resolve();
      })
    })
  },

  end: function() {
    db.end();
  },

  //for testing only
  deleteAll: function() {
    return new Promise((resolve, reject) => {

      db.query(deleteAllQuery, (err, res) => {
        if (err) {
          reject(new Error('Unable to remove database entries'));
          return;
        }

        resolve();
      })
    });
  }
};

module.exports.keys = keys;