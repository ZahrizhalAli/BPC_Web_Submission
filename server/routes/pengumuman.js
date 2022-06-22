const express = require("express");

const router = express.Router();
//import from middleware
const { authCheck, adminCheck } = require("../middleware/auth");

//import from controllers to use as function inside router.post
const {
  createPengumuman,
  updatePengumuman,
  hapusPengumuman,
  getPengumuman,
  getAllPengumuman,
} = require("../controllers/pengumuman");

//if three middleware are assigned, then they all shares the same information
router.post("/pengumuman", authCheck, adminCheck, createPengumuman);
router.put("/pengumuman/:pid", authCheck, adminCheck, updatePengumuman);
router.post("/pengumuman/:pid", authCheck, adminCheck, hapusPengumuman);
router.get("/pengumuman/:pid", getPengumuman);
router.get("/pengumuman", getAllPengumuman);

module.exports = router;
