import express from "express";
import * as scootersController from "../controllers/scooters-controller.js";

const router = express.Router();

router.get("/", scootersController.getAllScooters);
router.get("/:id", scootersController.getScooterById);
router.post("/", scootersController.createScooter);
router.delete("/:id", scootersController.deleteScooterById);
router.put("/:id", scootersController.updateScooterById);
export default router;

// Routes su funkcijom