import { Router } from "express";
import { validateSchema } from "../middlewares/schemaValidation.js";
import { travelsSchema } from "../schemas/schemas.js";
import travelsController from "../controllers/travelsController.js";

const travelsRouter = Router();

travelsRouter.post("/travels", validateSchema(travelsSchema), travelsController.createTravel);
travelsRouter.get("/passengers/travels", travelsController.searchPassengersTravels);

export default travelsRouter;