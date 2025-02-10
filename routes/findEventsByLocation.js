const express = require("express");
const handleEventsByLocation = require("../controllers/findEventsByLocation");
const router = express.Router();

router.get("/", handleEventsByLocation);

module.exports = router;