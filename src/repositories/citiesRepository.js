import { db } from "../database/databaseConnection.js";

async function createCity(name){

    await db.query(`
        INSERT INTO cities (name)
        VALUES ($1);
    `, [name]);

}

async function searchCityByName(name){

    const result = await db.query(`
        SELECT * FROM cities WHERE name=$1;
    `, [name]);

    return result.rows[0];
}

const citiesRepository = {
    createCity,
    searchCityByName
}

export default citiesRepository;