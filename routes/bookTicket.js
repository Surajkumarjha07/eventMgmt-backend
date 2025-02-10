const express = require("express");
const { handleBookTicket } = require("../controllers/bookTicket");
const router = express.Router();

router.post("/", handleBookTicket);

module.exports = router;