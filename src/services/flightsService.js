import error from "../errors/types.js";
import citiesRepository from "../repositories/citiesRepository.js";
import { isDateValid } from "../utils/sqlUtils.js";
import flightsRepository from "../repositories/flightsRepository.js";

async function createFlight({origin, destination, date}){
    if( !origin || !destination || !date ) throw error.incompleteData();

    if(origin == destination) throw error.sameCities();

    const existOrigin = await citiesRepository.searchCityById(origin);
    if(!existOrigin) throw error.notFound(origin);

    const existDestination = await citiesRepository.searchCityById(destination);
    if(!existDestination) throw error.notFound(destination);

    if(!isDateValid(date)) throw error.invalidDate();
    
    return flightsRepository.createFlight(origin, destination, date);
}

const flightsService =  {
    createFlight
};

export default flightsService;