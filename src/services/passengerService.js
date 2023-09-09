import error from "../errors/types.js";
import passengerRepository from "../repositories/passengerRepository.js";

async function createPassenger(passenger){
    const { firstName, lastName } = passenger;
    if( !firstName || !lastName ) throw error.incompleteData();

    if(firstName.length < 2 || firstName.length > 100) throw error.invalidName("Nome");
    if(lastName.length < 2 || lastName.length > 100) throw error.invalidName("Sobrenome");

    return passengerRepository.createPassenger(passenger);
}

const passengerService =  {
    createPassenger
};

export default passengerService;