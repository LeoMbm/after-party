const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
})

router.post("/users", async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    res.status(200).send(body);
  } catch (error) {
    console.log(error);
  }

})

module.exports = router;