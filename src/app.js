const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');
const { ExpressPeerServer } = require('peer');

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    const peerServer = ExpressPeerServer(this.server, {
      debug: true,
    });
    this.server.use(cors());
    this.server.use('/peerjs', peerServer);
    this.server.use(express.static(path.join(__dirname, 'public')));
    this.server.set('views', path.join(__dirname, 'views'));
    this.server.set('view engine', 'ejs');
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
