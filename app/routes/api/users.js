// const express = require('express');
// const UserDatabase = require("../../db/User/UserDatabase");
// const UserRepository = require("../../repository/User/UserRepository");
// const UserServices = require("../../services/User/UserServices");
// const UserControllers = require('../../controllers/users/users.controllers');
//
// const userDatabase = new UserDatabase();
// const userRepository = new UserRepository(userDatabase);
// const userServices = new UserServices(userRepository)
// const userControllers = new UserControllers(userServices);
// const router = express.Router();
//
// router.get('/me', userControllers.me);
// router.get('/users', userControllers.findAllUser);
// router.get('/users/:id', userControllers.getOneUser);
//
// module.exports = router;