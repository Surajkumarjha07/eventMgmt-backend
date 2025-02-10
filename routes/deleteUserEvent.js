const express = require("express");
const handleDeleteUserEvent = require("../controllers/deleteUserEvent");
const router = express.Router();

router.delete("/", handleDeleteUserEvent);

module.exports = router;