import { db } from "../database/databaseConnection.js";

async function createFlight(origin, destination, date){
    await db.query(`
        INSERT INTO flights (origin, destination, date)
        VALUES ($1, $2, TO_DATE($3, 'DD-MM-YYYY'));
    `, [origin, destination, date]);
}

async function searchFlightById(id){

    const result = await db.query(`
        SELECT * FROM flights WHERE id=$1;
    `, [id]);

    return result.rows[0];
}

const flightsRepository = {
    createFlight,
    searchFlightById
}

export default flightsRepository;