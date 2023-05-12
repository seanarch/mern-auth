import express from "express";
import userCtrl from "../controllers/user.controller.js";

// /api/users GET POST
const router = express.Router();

router.route("/api/users").get(userCtrl.list).post(userCtrl.create);

// /api/users/:userId GET one, PUT one, DELETE one
router
  .route("/api/users/:userId")
  .get(userCtrl.read)
  .put(userCtrl.update)
  .delete(userCtrl.remove);

router.param("userId", userCtrl.userByID);

export default router;
