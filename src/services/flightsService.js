import error from "../errors/types.js";
import citiesRepository from "../repositories/citiesRepository.js";
import { dateValidation, isDateFormatValid, isDateValid, isValid } from "../utils/sqlUtils.js";
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

async function getFlights({origin, destination, biggerDate, smallerDate}){
    let result = undefined;

    if(!origin && !destination && !biggerDate && !smallerDate) result = await flightsRepository.searchFlights(); 
    else if(origin && destination) result = await flightsRepository.searchFlightByOriginDestination(origin, destination);
    else if(origin) result = await flightsRepository.searchFlightByOrigin(origin);
    else if(destination) result = await flightsRepository.searchFlightByDestination(destination);

    if(!biggerDate && !smallerDate) return result;
    if(biggerDate && !smallerDate) throw error.invalidDate2("Data inferior");
    if(!biggerDate && smallerDate) throw error.invalidDate2("Data superior");
    if(!isDateFormatValid(biggerDate)) throw error.invalidDate2("Data superior");
    if(!isDateFormatValid(smallerDate)) throw error.invalidDate2("Data inferior");
    if(!isValid(biggerDate, smallerDate)) throw error.invalidDate2("as datas, inferior maior que superior");

    if(biggerDate && smallerDate) {
        if(!result) result = await flightsRepository.searchFlights();
        const newResult = result.filter( flight =>{ 
            if(dateValidation(flight.date, biggerDate, smallerDate)){
                return true;
            }
            else return false;
        });
        return newResult;
    }
    
    return result;
}

const flightsService =  {
    createFlight,
    getFlights
};

export default flightsService;