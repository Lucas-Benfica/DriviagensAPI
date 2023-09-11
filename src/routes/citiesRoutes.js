import { Router } from "express";
import { validateSchema } from "../middlewares/schemaValidation.js";
import { citiesSchema } from "../schemas/schemas.js";
import citiesController from "../controllers/citiesController.js";

const citiesRouter = Router();

citiesRouter.post("/cities", validateSchema(citiesSchema), citiesController.createCity);

export default citiesRouter;