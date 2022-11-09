const express = require("express");
const router = express.Router();
const { auth } = require("../../middlewares/jwt");

const { root } = require("./root.contoller");

router.get("/", auth, root);

module.exports = router;
