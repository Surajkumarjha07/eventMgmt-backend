const express = require("express");
const handleGetAllTickets = require("../controllers/getAllTickets");
const router = express.Router();

router.get("/", handleGetAllTickets);

module.exports = router;