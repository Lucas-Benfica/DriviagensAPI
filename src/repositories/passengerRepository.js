import { db } from "../database/databaseConnection.js";
import { mapObjectToInsertQuery } from "../utils/sqlUtils.js";

async function createPassenger(passenger){

    const { objectColumns, objectValues, paramsOrder } = mapObjectToInsertQuery(passenger);

    await db.query(`
        INSERT INTO passengers (${objectColumns})
        VALUES (${paramsOrder});
    `, [...objectValues]);
}

const passengerRepository = {
    createPassenger
}

export default passengerRepository;