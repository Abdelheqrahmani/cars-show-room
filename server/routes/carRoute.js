import express from "express";

import { createCar, getAllCars , getCarByName } from "../controllers/carController.js";

const router = express.Router();

router.post("/addNewCar", createCar);
router.get("/getAllCars", getAllCars);
router.get("/getCarByName/:name", getCarByName);

export default router;
