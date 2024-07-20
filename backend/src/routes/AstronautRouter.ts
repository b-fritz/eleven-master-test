// src/routes/AstronautRouter.ts
import express from "express";
import AstronautController from "../controllers/AstronautController";

const router = express.Router();

router.get("/", AstronautController.getAll);
router.get("/:id", AstronautController.getById);
router.post("/create", AstronautController.create);
router.put("/update", AstronautController.update);
router.delete("/delete/:id", AstronautController.delete);

export default router;
