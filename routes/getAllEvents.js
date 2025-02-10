const express = require("express");
const handleGetAllEvents = require("../controllers/getAllEvents");
const router = express.Router();

router.get("/", handleGetAllEvents);

module.exports = router;