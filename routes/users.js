import express from "express";
import {
  getUsers,
  getUserById,
  updateUserProfile,
  updateUserAvatar,
  createUser,
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:userId", getUserById);
router.post("/", createUser);
router.patch('/me', updateUserProfile);
router.patch('/me/avatar', updateUserAvatar);

export default router;

