const express = require("express");

const router = express.Router();
//import from middleware
const { authCheck, adminCheck } = require("../middleware/auth");

//import from controllers to use as function inside router.post
const {
  getUser,
  getAllUser,
  updateUser,
  updateVerifikasi,
  updateBatalVerifikasi,
  updateUserBCC,
  updateUserBPC,
  updateUserBCC2,
  updateTahap2,
  updateBatalTahap2,
} = require("../controllers/user");

//if three middleware are assigned, then they all shares the same information
router.get("/user/:userid", getUser);
router.get("/users/:lomba", getAllUser);
router.put("/update-user", authCheck, updateUser);
router.put("/update-user-bcc", authCheck, updateUserBCC);
router.put("/update-user-bcc2", authCheck, updateUserBCC2);
router.put("/update-user-bpc", authCheck, updateUserBPC);
router.put("/update-user-verifikasi", authCheck, updateVerifikasi);
router.put("/update-user-batal-verifikasi", authCheck, updateBatalVerifikasi);
router.put("/update-user-tahap-2", authCheck, updateTahap2);
router.put("/update-user-batal-tahap-2", authCheck, updateBatalTahap2);

module.exports = router;
