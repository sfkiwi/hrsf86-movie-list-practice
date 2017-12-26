const api = require('../config/movieapi_key');

//api.key;

module.exports = {
  
  load: function() {
    return new Promise((resolve, reject) => {
      console.log('Loading API results (Stubbed)');
      resolve();
    });
  }
}