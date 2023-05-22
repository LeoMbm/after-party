const express = require("express");
const router = express.Router();
const UserDatabase = require('../../db/User/UserDatabase');
const UserRepository = require('../../repository/User/UserRepository');
const UserService = require('../../services/User/UserServices');
const isUUID = require("../../utils/utils");

const userDatabase = new UserDatabase();
const userRepository = new UserRepository(userDatabase);
const userService = new UserService(userRepository);
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
// router.post("/users", async (req, res) => {
//   try {
//     const body = req.body;
//     console.log(body);
//     res.status(200).send(body);
//   } catch (error) {
//     console.log(error);
//   }
//
// })

module.exports = router;