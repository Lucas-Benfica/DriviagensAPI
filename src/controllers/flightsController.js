import httpStatus from "http-status";
import flightsService from "../services/flightsService.js";

async function createFlight(req, res) {
    const { body } = req;
    await flightsService.createFlight(body);
    res.sendStatus(httpStatus.CREATED);
}

async function getFlights(req, res) {
    const origin = req.query.origin;
    const destination = req.query.destination;
    const smallerDate = req.query['smaller-date'];
    const biggerDate = req.query['bigger-date'];

    const result = await flightsService.getFlights({origin, destination, biggerDate, smallerDate});
    res.send(result);
}

const flightsController = {
    createFlight,
    getFlights
};

export default flightsController;