import { Router } from "express";
import { validateSchema } from "../middlewares/schemaValidation.js";
import { flightsSchema } from "../schemas/schemas.js";
import flightsController from "../controllers/flightsController.js";

const flightsRouter = Router();

flightsRouter.post("/flights", validateSchema(flightsSchema), flightsController.createFlight);
flightsRouter.get("/flights", flightsController.getFlights);

export default flightsRouter;