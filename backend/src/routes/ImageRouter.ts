import express from "express";
import ImageController from "../controllers/ImageController";

const router = express.Router();

router.get("/", ImageController.getAll);
router.get("/:id", ImageController.getById);
router.post("/create/", ImageController.create);
router.put("/update/", ImageController.update);
router.delete("/delete/:id", ImageController.delete);

export default router;
