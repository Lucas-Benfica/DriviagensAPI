import { db } from "../database/databaseConnection.js";
import { mapObjectToInsertQuery } from "../utils/sqlUtils.js";

async function createPassenger(passenger){

    const { objectColumns, objectValues, paramsOrder } = mapObjectToInsertQuery(passenger);

    await db.query(`
        INSERT INTO passengers (${objectColumns})
        VALUES (${paramsOrder});
    `, [...objectValues]);
}

async function searchPassengerById(id){

    const result = await db.query(`
        SELECT * FROM passengers WHERE id=$1;
    `, [id]);

    return result.rows[0];
}

const passengerRepository = {
    createPassenger,
    searchPassengerById
}

export default passengerRepository;