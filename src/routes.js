const { Router } = require('express');
const { v4: uuidV4 } = require('uuid');

const route = Router();

route.get('/', (req, res) => {
  res.redirect(`/${uuidV4()}`);
});

route.get('/:room', (req, res) => {
  res.render('room', { roomId: req.params.room });
});

module.exports = route;
