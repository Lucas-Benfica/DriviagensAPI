import { db } from "../database/databaseConnection.js";

async function createFlight(origin, destination, date){
    await db.query(`
        INSERT INTO flights (origin, destination, date)
        VALUES ($1, $2, TO_DATE($3, 'DD-MM-YYYY'));
    `, [origin, destination, date]);
}

async function searchFlights(){

    const result = await db.query(`
        SELECT flights.id, cities_origin.name AS origin, cities_destination.name AS destination, TO_CHAR(flights.date, 'DD-MM-YYYY') AS date
        FROM flights
        INNER JOIN cities AS cities_origin ON flights.origin = cities_origin.id
        INNER JOIN cities AS cities_destination ON flights.destination = cities_destination.id
        ORDER BY date ASC;
    `);

    return result.rows;
}

async function searchFlightById(id){

    const result = await db.query(`
        SELECT * FROM flights WHERE id=$1;
    `, [id]);

    return result.rows[0];
}

async function searchFlightByOrigin(origin){

    const result = await db.query(`
        SELECT flights.id, cities_origin.name AS origin, cities_destination.name AS destination, TO_CHAR(flights.date, 'DD-MM-YYYY') AS date
        FROM flights
        INNER JOIN cities AS cities_origin ON flights.origin = cities_origin.id
        INNER JOIN cities AS cities_destination ON flights.destination = cities_destination.id
        WHERE cities_origin.name = $1
        ORDER BY date ASC;

    `, [origin]);

    return result.rows;
}

async function searchFlightByDestination(destination){

    const result = await db.query(`
        SELECT flights.id, cities_origin.name AS origin, cities_destination.name AS destination, TO_CHAR(flights.date, 'DD-MM-YYYY') AS date
        FROM flights
        INNER JOIN cities AS cities_origin ON flights.origin = cities_origin.id
        INNER JOIN cities AS cities_destination ON flights.destination = cities_destination.id
        WHERE cities_destination.name = $1
        ORDER BY date ASC;
    `, [destination]);

    return result.rows;
}

async function searchFlightByOriginDestination(origin, destination){

    const result = await db.query(`
        SELECT flights.id, cities_origin.name AS origin, cities_destination.name AS destination, TO_CHAR(flights.date, 'DD-MM-YYYY') AS date
        FROM flights
        INNER JOIN cities AS cities_origin ON flights.origin = cities_origin.id
        INNER JOIN cities AS cities_destination ON flights.destination = cities_destination.id
        WHERE cities_origin.name = $1 AND cities_destination.name = $2
        ORDER BY date ASC;
    `, [origin, destination]);

    return result.rows;
}

const flightsRepository = {
    createFlight,
    searchFlights,
    searchFlightById,
    searchFlightByOrigin,
    searchFlightByDestination,
    searchFlightByOriginDestination
}

export default flightsRepository;