const express = require("express");

const router = express.Router();
//import from middleware
const { authCheck, adminCheck } = require("../middleware/auth");

//import from controllers to use as function inside router.post
const {
  uploadktm,
  uploadsak,
  uploadbb,
  uploadtwibbon,
  sendFiles,
  uploadfilepengumuman,
  uploadbcc,
  uploadbcc2,
  uploadbpc,
} = require("../controllers/berkas");

//if three middleware are assigned, then they all shares the same information
//routes for uploading imagess
router.post("/uploadimagesktm", authCheck, uploadktm);
router.post("/uploadimagessak", authCheck, uploadsak);
router.post("/uploadimagesbb", authCheck, uploadbb);
router.post(
  "/uploadfilepengumuman",
  authCheck,
  adminCheck,
  uploadfilepengumuman
);
router.post("/uploadimagestwibbon", authCheck, uploadtwibbon);
router.post("/uploadfilebcc", authCheck, uploadbcc);
router.post("/uploadfilebcc2", authCheck, uploadbcc2);
router.post("/uploadfilebpc", authCheck, uploadbpc);
router.get("/uploads/:path/:filename", sendFiles);
//routes for removing images
// router.post("/removeimage", authCheck, remove);

module.exports = router;
