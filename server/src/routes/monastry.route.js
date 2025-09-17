import { Router } from "express";
import { fetchAllMonastry, fetchMonasteryById } from "../controllers/monastry.controller.js";

const router = Router();

// GET /api/v1/monasteries → fetch all monasteries
router.get("/", fetchAllMonastry);

// GET /api/v1/monasteries/:id → fetch single monastery by ID
router.get("/:id", fetchMonasteryById);

export default router;