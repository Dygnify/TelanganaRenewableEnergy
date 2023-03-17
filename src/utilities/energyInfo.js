

export const districtNameList = [
	"Adilabad",
	"Bhadradri Kothagudem",
	"Hyderabad",
	"Jagtial",
	"Jangaon",
	"Jayashankar",
	"Jogulamba",
	"Kamareddy",
	"Karimnagar",
	"Khammam",
	"Komaram Bheem",
	"Mahabubabad",
	"Mancherial",
	"Medak",
	"Medchal Malkajgiri",
	"Mulugu",
	"Nagarkurnool",
	"Narayanpet",
	"Nalgonda",
	"Nirmal",
	"Nizamabad",
	"Peddapalli",
	"Rajanna Sircilla",
	"Rangareddy",
	"Sangareddy",
	"Siddipet",
	"Suryapet",
	"Vikarabad",
	"Wanaparthy",
	"Warangal Rural",
	"Warangal Urban",
	"Yadadri Bhuvanagiri",
];
export const districtEnergyList = [
	107, 254, 71, 66, 73, 90, 124, 106, 178, 354, 74, 83, 69, 641, 67, 57, 134,
	87, 434, 67, 90, 89, 117, 614, 303, 144, 189, 71, 100, 84, 96, 111,
];

let energyMap = new Map();
let totalDistricts = districtNameList.length;
let totalEnergy = 0;
for(let i=0; i<totalDistricts; i++){
    energyMap.set(districtNameList[i], districtEnergyList[i]);
    totalEnergy += districtEnergyList[i];
}
energyMap.set("Telangana State", totalEnergy);


export default energyMap;
