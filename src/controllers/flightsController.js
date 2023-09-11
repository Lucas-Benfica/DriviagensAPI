import httpStatus from "http-status";
import flightsService from "../services/flightsService.js";

async function createFlight(req, res) {
    const { body } = req;
    await flightsService.createFlight(body);
    res.sendStatus(httpStatus.CREATED);
}

const flightsController = {
    createFlight
};

export default flightsController;