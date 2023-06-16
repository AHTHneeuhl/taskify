import { Router } from "express";

import { verifyToken } from "../middlewares/verifyToken.js";
import {
  createTeam,
  deleteTeam,
  getTeam,
  updateTeam,
} from "../controllers/teams.js";

const router = Router();

router.post("/", verifyToken, createTeam);
router.get("/:id", verifyToken, getTeam);
router.patch("/:id", verifyToken, updateTeam);
router.delete("/:id", verifyToken, deleteTeam);

export default router;
