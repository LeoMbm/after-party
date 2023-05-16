const express = require("express");
const router = express.Router();

router.get("/signin", (req, res) => {
  res.status(res.statusCode).json({
    message: "Sign In mean to login",
    status: res.statusCode,
    code: "OK",

  });
})


router.get("/signup", (req, res) => {
    res.status(res.statusCode).json({
        message: "Sign Up mean to register",
        status: res.statusCode,
        code: "OK",
    
      });
})
  
module.exports = router;