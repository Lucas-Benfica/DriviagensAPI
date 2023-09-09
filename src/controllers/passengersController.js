import httpStatus from "http-status";
import passengerService from "../services/passengerService.js";

async function createPassenger(req, res) {
    const { body } = req;
    await passengerService.createPassenger(body);
    res.sendStatus(httpStatus.CREATED);
}

const passengerController = {
    createPassenger
};

export default passengerController;