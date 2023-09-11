import httpStatus from "http-status";
import travelsService from "../services/travelsService.js";

async function createTravel(req, res) {
    const { body } = req;
    await travelsService.createTravel(body);
    res.sendStatus(httpStatus.CREATED);
}

async function searchPassengersTravels(req, res) {
    const name = req.query.name;
    const result = await travelsService.searchPassengersTravels(name);
    return result;
}

const travelsController = {
    createTravel,
    searchPassengersTravels
};

export default travelsController;