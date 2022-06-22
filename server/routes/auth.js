const express = require("express");

const router = express.Router();
//import from middleware
const { authCheck, adminCheck } = require("../middleware/auth");

//import from controllers to use as function inside router.post
const { createOrUpdateUser, currentUser } = require("../controllers/auth");

//if three middleware are assigned, then they all shares the same information
router.post("/create-or-update-user", authCheck, createOrUpdateUser);
router.post("/current-user", authCheck, currentUser);

router.post("/current-admin", authCheck, adminCheck, currentUser);

module.exports = router;
