const express = require("express");
const router = express.Router();
const { auth } = require("../../middlewares/jwt");

const { todo } = require("./todo.controller");

router.get("/", auth, todo);

module.exports = router;
