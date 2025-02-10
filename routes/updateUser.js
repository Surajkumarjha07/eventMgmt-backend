const express = require("express");
const handleUpdateUser = require("../controllers/updateUser");
const router = express.Router();

router.put("/", handleUpdateUser);

module.exports = router;