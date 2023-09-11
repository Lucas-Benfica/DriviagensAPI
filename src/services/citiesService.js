import error from "../errors/types.js";
import citiesRepository from "../repositories/citiesRepository.js";

async function createCity({name}){
    if( !name ) throw error.incompleteData();

    if(name.length <= 2 || name.length > 50) throw error.invalidName("Cidade");

    const exist = await citiesRepository.searchCityByName(name);
    if(exist) throw error.conflict(name);

    return citiesRepository.createCity(name);
}

const citiesService =  {
    createCity
};

export default citiesService;