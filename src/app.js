require('dotenv/config');
require('./database');
const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');
const session = require('express-session');
const expressLayouts = require('express-ejs-layouts');

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.urlencoded({ extended: false }));
    this.server.use(
      session({
        secret: process.env.APP_SECRET,
        resave: false,
        saveUninitialized: false,
      })
    );
    this.server.use(express.static(path.join(__dirname, 'public')));
    this.server.use(expressLayouts);
    this.server.set('views', path.join(__dirname, 'views'));
    this.server.set('view engine', 'ejs');
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
