import error from "../errors/types.js";
import flightsRepository from "../repositories/flightsRepository.js";
import passengerRepository from "../repositories/passengerRepository.js";
import travelsRepository from "../repositories/travelsRepository.js";

async function createTravel({passengerId, flightId}){
    if( !passengerId || !flightId ) throw error.incompleteData();

    const existPassenger = await passengerRepository.searchPassengerById(passengerId);
    if(!existPassenger) throw error.notFound(`Passageiro ${passengerId}`);

    const existFlight = await flightsRepository.searchFlightById(flightId);
    if(!existFlight) throw error.notFound(`Voo ${flightId}`);

    const existTravel = await travelsRepository.alreadyExistsTravel(passengerId, flightId);
    if(existTravel) throw error.conflict(`Viagem`);

    return travelsRepository.createTravel(passengerId, flightId);
}

async function searchPassengersTravels(name){
    if(name) return await travelsRepository.searchPassengersTravelsByName(name);
    return await travelsRepository.searchPassengersTravels();
}

const travelsService =  {
    createTravel,
    searchPassengersTravels
};

export default travelsService;