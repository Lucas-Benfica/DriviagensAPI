import { db } from "../database/databaseConnection.js";

async function createTravel(passengerId, flightId){
    await db.query(`
        INSERT INTO travels ("passengerId", "flightId")
        VALUES ($1, $2);
    `, [passengerId, flightId]);
}

async function searchTravelById(id){
    const result = await db.query(`
        SELECT * FROM travels WHERE id=$1;
    `, [id]);

    return result.rows[0];
}

async function alreadyExistsTravel(passengerId, flightId){
    const result = await db.query(`
        SELECT * FROM travels WHERE "passengerId"=$1 AND "flightId"=$2;
    `, [passengerId, flightId]);

    return result.rows[0];
}

async function searchPassengersTravels(){
    const result = await db.query(`
        SELECT CONCAT(passengers."firstName", ' ', passengers."lastName") AS passenger, COUNT(travels.id) AS travels
        FROM passengers
        LEFT JOIN travels ON passengers.id = travels."passengerId"
        GROUP BY passengers.id, passengers."firstName", passengers."lastName"
        ORDER BY travels DESC
        LIMIT 10;
    `);
    console.log(result.rows);

    return result.rows;
}

async function searchPassengersTravelsByName(name) {
    const result = await db.query(`
        SELECT CONCAT(passengers."firstName", ' ', passengers."lastName") AS passenger, COUNT(travels.id) AS travels
        FROM passengers
        LEFT JOIN travels ON passengers.id = travels."passengerId"
        WHERE passengers."firstName" ILIKE $1 OR passengers."lastName" ILIKE $1
        GROUP BY passengers.id, passengers."firstName", passengers."lastName"
        ORDER BY travels DESC
        LIMIT 10;
    `, [`%${name}%`]);

    return result.rows;
}

const travelsRepository = {
    createTravel,
    searchTravelById,
    alreadyExistsTravel,
    searchPassengersTravels,
    searchPassengersTravelsByName
}

export default travelsRepository;