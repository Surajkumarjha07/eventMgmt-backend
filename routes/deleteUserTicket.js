const express = require("express");
const handleDeleteUserTicket = require("../controllers/deleteUserTicket");
const router = express.Router();

router.delete("/", handleDeleteUserTicket);

module.exports = router;