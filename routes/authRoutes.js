import express from "express";
import {
  registerController,
  loginController,
  currentUserController,
  forgotPasswordController,
  updateProfileController,
  findPeopleController,
} from "../controllers/authCtrl";
import { requireSignin } from "../middlewares";
//router object
const router = express.Router();

//routes
//register route
router.post("/register", registerController);
//login route
router.post("/login", loginController);
//currentUser
router.get("/currentuser", requireSignin, currentUserController);
//forgot password
router.post("/forgot-password", forgotPasswordController);
//profile update
router.put("/profile-update", requireSignin, updateProfileController);
router.get("/find-people",requireSignin,findPeopleController)
module.exports = router;
