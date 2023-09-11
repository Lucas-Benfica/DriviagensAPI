import httpStatus from "http-status";
import travelsService from "../services/travelsService.js";

async function createTravel(req, res) {
    const { body } = req;
    await travelsService.createTravel(body);
    res.sendStatus(httpStatus.CREATED);
}

const travelsController = {
    createTravel
};

export default travelsController;