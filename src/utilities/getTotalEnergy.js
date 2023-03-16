import { allCoordinators } from "./coordinates";

export const getTotalEnergy = () => {
    let total =0 ;
    for(let item of allCoordinators){
        total+=item.energy;
    }
    return total;
}