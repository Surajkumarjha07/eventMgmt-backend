const express = require("express");
const userAuthenticated = require("../controllers/userAuthenticated");
const router = express.Router();

router.get("/", userAuthenticated);

module.exports = router;