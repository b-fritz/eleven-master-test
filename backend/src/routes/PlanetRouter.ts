import express from "express";
import PlanetController from "../controllers/PlanetController";

const router = express.Router();

router.get("/", PlanetController.getAll);
router.get("/:id", PlanetController.getById);
router.post("/create", PlanetController.create);
router.put("/update", PlanetController.update);
router.delete("/delete/:id", PlanetController.delete);

export default router;
