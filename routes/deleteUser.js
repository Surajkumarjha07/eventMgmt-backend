const express = require("express");
const handleDeleteUser = require("../controllers/deleteUser");
const router = express.Router();

router.delete("/", handleDeleteUser);

module.exports = router;