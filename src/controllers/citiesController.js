import httpStatus from "http-status";
import citiesService from "../services/citiesService.js";

async function createCity(req, res) {
    const { body } = req;
    await citiesService.createCity(body);
    res.sendStatus(httpStatus.CREATED);
}

const citiesController = {
    createCity
};

export default citiesController;