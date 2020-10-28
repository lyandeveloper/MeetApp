const { Router } = require('express');
const { v4: uuidV4 } = require('uuid');

const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');

const route = Router();

route.get('/', SessionController.create);
route.post('/', SessionController.store);

route.get('/signUp', UserController.create);
route.post('/signUp', UserController.store);

route.get('/room', (req, res) => {
  res.redirect(`/room/${uuidV4()}`);
});

route.get('/room/:room', (req, res) => {
  res.render('room', { roomId: req.params.room, user: req.session.user.name });
});

module.exports = route;
