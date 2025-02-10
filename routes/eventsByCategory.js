const express = require("express");
const handleEventsByCategory = require("../controllers/eventsByCategory");
const router = express.Router();

router.get("/", handleEventsByCategory);

module.exports = router;