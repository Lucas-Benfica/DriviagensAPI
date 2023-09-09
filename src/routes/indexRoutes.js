import { Router } from "express";
import citiesRouter from "./citiesRoutes.js";
import flightsRouter from "./flightsRoutes.js";
import passengersRouter from "./passengersRoutes.js";
import travelsRouter from "./travelsRoutes.js";

const router = Router();

router.use(citiesRouter);
router.use(flightsRouter);
router.use(passengersRouter);
router.use(travelsRouter);

export default router;