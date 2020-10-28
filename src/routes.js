const { Router } = require('express');
const { v4: uuidV4 } = require('uuid');

const route = Router();

route.get('/', (req, res) => {
  res.render('login');
});

route.get('/signUp', (req, res) => {
  res.render('create-account');
});

route.get('/room', (req, res) => {
  res.redirect(`/room/${uuidV4()}`);
});

route.get('/room/:room', (req, res) => {
  res.render('room', { roomId: req.params.room });
});

module.exports = route;
