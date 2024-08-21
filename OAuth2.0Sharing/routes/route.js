const express = require("express");
const router = express.Router();
const userRouter = require("./auth_route.js");

router.use("/page", userRouter);

module.exports = router;
