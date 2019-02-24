const express = require("express");
const router = express.Router();

// @route GET api/profile/test
// @desc Tests profile route
// public route
router.get("/test", (req, res) => res.json({ msg: "Profile works" }));

module.exports = router;
