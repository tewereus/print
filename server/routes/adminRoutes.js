const express = require("express");
const router = express.Router();
const {
  //   registerUser,
  loginAdmin,
  logout,
  viewAdminProfile,
  getaUser,
  blockUser,
  unblockUser,
  updatePassword,
  deleteUser,
  deleteAllUsers,
  forgotPasswordToken,
  resetPassword,
  getAllUsers,
  getAllAdmins,
} = require("../controllers/adminCtrl");

const { adminAuthMiddleware } = require("../middlewares/authMiddleware");

// router.post("/registerAdmin", registerUser);
router.post("/login", loginAdmin);
router.post("/logout", logout);
router.get("/profile", adminAuthMiddleware, viewAdminProfile);
router.put("/update-password", updatePassword);
router.put("/get-user/:id", getaUser);
router.put("/get-user/:id/block", blockUser);
router.put("/get-user/:id/unblock", unblockUser);
router.delete("/get-user/:id/delete", deleteUser);
router.delete("/all-users/delete", deleteAllUsers);
router.post("/forgot-password", forgotPasswordToken);
router.put("/reset-password/:token", resetPassword);
router.get("/all-users", getAllUsers);
router.get("/all-admins", getAllAdmins);
module.exports = router;
