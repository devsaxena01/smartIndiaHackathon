import { Router } from "express";
import { fetchAllMonastry, fetchMonasteryById } from "../controllers/monastry.controller.js";

const router = Router();

//fetching all monasteries
router.get("/", fetchAllMonastry);

//fetching single monastery by ID
router.get("/:id", fetchMonasteryById);

export default router;