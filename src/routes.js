const { Router } = require('express');
const { v4: uuidV4 } = require('uuid');

const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');
const RoomController = require('./app/controllers/RoomController');

const AuthMiddleware = require('./app/middlewares/auth');
const AppMiddleware = require('./app/middlewares/appAuth');
const HomeController = require('./app/controllers/HomeController');

const route = Router();

route.use('/room', AuthMiddleware);
route.use('/welcome', AuthMiddleware);

route.get('/', AppMiddleware, SessionController.create);
route.post('/', SessionController.store);
route.get('/welcome/loggout', SessionController.destroy);

route.get('/signUp', AppMiddleware, UserController.create);
route.post('/signUp', UserController.store);

route.get('/home', HomeController.create);

route.get('/home/create-room', RoomController.create);
route.post('/home/create-room', RoomController.store);

route.get('/home/load-room', RoomController.renderLoadRoom);
route.post('/home/load-room', RoomController.loadRoom);

route.get('/home/delete/:roomId', RoomController.delete);

route.get('/room/:roomId', RoomController.index);

module.exports = route;
