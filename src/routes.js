const { Router } = require('express');
const { v4: uuidV4 } = require('uuid');

const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');
const RoomController = require('./controllers/RoomController');

const AuthMiddleware = require('./middlewares/auth');
const AppMiddleware = require('./middlewares/appAuth');

const route = Router();

route.use('/room', AuthMiddleware);
route.use('/welcome', AuthMiddleware);

route.get('/', AppMiddleware, SessionController.create);
route.post('/', SessionController.store);
route.get('/welcome/loggout', SessionController.destroy);

route.get('/signUp', AppMiddleware, UserController.create);
route.post('/signUp', UserController.store);

route.get('/welcome', (req, res) => {
  res.render('home', { username: req.session.user.name });
});

route.get('/welcome/create-room', RoomController.create);
route.post('/welcome/create-room', RoomController.store);

route.get('/room/:room', (req, res) => {
  res.render('room', { roomId: req.params.room, user: req.session.user.name });
});

module.exports = route;
