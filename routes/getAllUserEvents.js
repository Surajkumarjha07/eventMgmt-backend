const express = require("express");
const handleGetAllUserEvents = require("../controllers/getAllUserEvents");
const router = express.Router();

router.get("/", handleGetAllUserEvents);

module.exports = router;