import { Router } from "express";

import { verifyToken } from "../middlewares/verifyToken";
import {
  addProject,
  deleteProject,
  getProject,
  getProjectMembers,
  getWorks,
  updateMembers,
  updateProject,
} from "../controllers/projects";

const router = Router();

// Projects Routes
router.get("/:id", verifyToken, getProject);
router.post("/", verifyToken, addProject);
router.patch("/:id", verifyToken, updateProject);
router.delete("/:id", verifyToken, deleteProject);

// Members Routes
router.get("/members/:id", verifyToken, getProjectMembers);
router.patch("/members/:id", verifyToken, updateMembers);

// Works Routes
router.get("/works/:id", verifyToken, getWorks);

export default router;
