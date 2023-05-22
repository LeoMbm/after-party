const express = require("express");
const router = express.Router();
const UserDatabase = require('../../db/User/UserDatabase');
const UserRepository = require('../../repository/User/UserRepository');
const UserService = require('../../services/User/UserServices');
const isUUID = require("../../utils/utils");

const userDatabase = new UserDatabase();
const userRepository = new UserRepository(userDatabase);
const userService = new UserService(userRepository);

//
//
// class UserControllers {
//     constructor(userService) {
//         this.service =  userService;
//     }
//     async getOneUser(req, res)  {
//         const userId = req.params.id;
//         if (!userId) {
//             res.status(400).send("User id is required");
//         }
//         else if (!isUUID(userId)) {
//             res.status(400).send({ message: "User id must be a valid UUID"});
//
//
//         }
//         this.service.getUserById(userId).then((user) => {
//             res.status(200).send(user);
//         }).catch((error) => {
//             console.log(error);
//         })
//     }
//     async findAllUser (req, res) {
//         this.service.getAllUser().then((user) => {
//             if (user.data.length !== 0) {
//                 res.status(200).send(user);
//             }
//             else {
//                 res.status(404).send(user);
//             }
//
//         }).catch((error) => {
//             console.log(error);
//         })
//     }
//     me(req, res){
//        res.send({
//              message: "This is me",
//                 status: res.statusCode,
//                 code: "OK",
//        });
//     }
//
// }


// # TODO: Implement the UserControllers class to handle the following routes:
// # GET /users/:id
// # GET /users
// # GET /me
// # The UserControllers class should use the UserService class to handle the business logic.
router.get("/", (req, res) => {
  res.send("Hello World!");
})
router.get("/users/:id", (req, res) => {
    const userId = req.params.id;
    if (!userId) {
        res.status(400).send("User id is required");
    }
    else if (!isUUID(userId)) {
        res.status(400).send({ message: "User id must be a valid UUID"});

    }
    userService.getUserById(userId).then((user) => {
        res.status(200).send(user);
    }).catch((error) => {
        console.log(error);
    })
})
router.get("/users", (req, res) => {
    userService.getAllUser().then((user) => {
        if (user.data.length !== 0) {
            res.status(200).send(user);
        }
        else {
            res.status(404).send(user);
        }

    }).catch((error) => {
        console.log(error);
    })
})

router.get("/me", (req, res) => {
   res.send({
         message: "This is me",
            status: res.statusCode,
            code: "OK",
   });
})

module.exports = router;