import { Router } from "express";
import { fetchAllArchives } from "../controllers/archives.controller.js";

const router = Router();

router.get("/", fetchAllArchives);

export default router;