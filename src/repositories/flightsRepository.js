import { db } from "../database/databaseConnection.js";
import { mapObjectToInsertQuery } from "../utils/sqlUtils.js";

async function createFlight(flight){

    const { objectColumns, objectValues, paramsOrder } = mapObjectToInsertQuery(flight);

    await db.query(`
        INSERT INTO flights (${objectColumns})
        VALUES (${paramsOrder});
    `, [...objectValues]);

}

const flightRepository = {
    createFlight
}

export default flightRepository;