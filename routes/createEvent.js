const express = require("express");
const { handleCreateEvent, upload } = require("../controllers/createEvent");
const router = express.Router();

router.post("/", upload.single("image"), handleCreateEvent);

module.exports = router;