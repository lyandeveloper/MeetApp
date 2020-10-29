require('dotenv/config');
require('./database');
const express = require('express');
const redis = require('redis');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');
const session = require('express-session');
const expressLayouts = require('express-ejs-layouts');

const RedisStore = require('connect-redis')(session);
const redisClient = redis.createClient();

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.errorHanddling();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.urlencoded({ extended: false }));
    this.server.use(
      session({
        store: new RedisStore({ client: redisClient }),
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

  errorHanddling() {
    this.server.use((req, res, next) => {
      res.status(404);

      if (req.accepts('html')) {
        res.render('404', { url: req.url });
        return;
      }
    });

    this.server.use((err, req, res, next) => {
      console.log(err.stack);
      return next(err);
    });

    this.server.use((err, req, res, next) => {
      if (req.xhr) {
        res.status(500).send({ error: '500 - Erro no server!' });
      } else {
        return next(err);
      }
    });

    this.server.use((err, req, res, next) => {
      res.status(500);
      return res.render('error', { error: err });
    });
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
