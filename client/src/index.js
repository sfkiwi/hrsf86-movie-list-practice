
//import http from 'axios';

//http.defaults.baseURL = 'http://localhost:3000';
//http.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
const AppView = require('./views/app');
const Backbone = require('backbone');

$(function() {
  new AppView();
})