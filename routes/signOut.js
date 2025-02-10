const express = require("express");
const handleSignOut = require("../controllers/signOut");
const router = express.Router();

router.post("/", handleSignOut);

module.exports = router;