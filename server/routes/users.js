import { Router } from "express";
import { verifyToken } from "../middlewares/verifyToken.js";
import {
  deleteUser,
  getUser,
  getUserByEmail,
  getUserDetails,
  getUserProjects,
  getUserTasks,
  getUserTeams,
  getUserWorks,
  updateUser,
} from "../controllers/users.js";

const router = Router();

// Users Routes
router.get("/find", verifyToken, getUser);
router.get("/find/:id", verifyToken, getUserDetails);
router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deleteUser);

router.get("/search/:email", verifyToken, getUserByEmail);

// User Projects Routes
router.get("/projects", verifyToken, getUserProjects);

// User Teams Routes
router.get("/teams", verifyToken, getUserTeams);

// User Tasks Routes
router.get("/tasks", verifyToken, getUserTasks);

// User Works Routes
router.get("/works", verifyToken, getUserWorks);

export default router;
