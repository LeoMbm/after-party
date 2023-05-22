// const express = require('express');
// const UserDatabase = require("../db/User/UserDatabase");
// const UserRepository = require("../repository/User/UserRepository");
// const UserService = require("../services/User/UserServices");
// const UserController = require('../controllers/users/users.controllers');
//
// const userDatabase = new UserDatabase();
// const userRepository = new UserRepository(userDatabase);
// const userService = new UserService(userRepository);
// const userController = new UserController(userService);
// const router = express.Router();
//
// router.get('/me', userController.me);
// router.get('/users', userController.findAllUser);
// router.get('/users/:id', userController.getOneUser);
//
// module.exports = router;