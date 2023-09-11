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

const travelsRepository = {
    createTravel,
    searchTravelById,
    alreadyExistsTravel
}

export default travelsRepository;