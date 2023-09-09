import { Router } from "express";
import { validateSchema } from "../middlewares/schemaValidation.js";
import { passengersSchema } from "../schemas/schemas.js";
import passengerController from "../controllers/passengersController.js";

const passengersRouter = Router();

passengersRouter.post("/passengers", validateSchema(passengersSchema), passengerController.createPassenger);

export default passengersRouter;