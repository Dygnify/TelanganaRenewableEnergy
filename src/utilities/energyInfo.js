export const districtNameList = [
	"Jayashankar",
	"Mulugu",
	"Mahabubnagar",
	"Narayanpet",
	"Medak",
	"Ranga Reddy",
	"Sangareddy",
	"Medchal Malkajgiri",
	"Hyderabad",
	"Vikarabad",
	"Jangaon",
	"Yadadri Bhuvanagiri",
	"Nalgonda",
	"Karimnagar",
	"Siddipet",
	"Warangal Rural",
	"Warangal Urban",
	"Nizamabad",
	"Rajanna Sircilla",
	"Kamareddy",
	"Jogulamba",
	"Nagarkurnool",
	"Wanaparthy",
	"Bhadradri Kothagudem",
	"Khammam",
	"Mahabubabad",
	"Mancherial",
	"Peddapalli",
	"Jagtial",
	"Adilabad",
	"Nirmal",
	"Komaram Bheem",
	"Suryapet",
];
export const districtEnergyList = [
	90, 57, 57, 87, 641, 614, 303, 67, 71, 71, 73, 111, 434, 178, 144, 84, 96,
	90, 117, 106, 124, 134, 100, 254, 354, 83, 69, 89, 66, 107, 67, 74, 189,
];

let energyMap = new Map();
let totalDistricts = districtNameList.length;
let totalEnergy = 0;
for (let i = 0; i < totalDistricts; i++) {
	energyMap.set(districtNameList[i], districtEnergyList[i]);
	totalEnergy += districtEnergyList[i];
}
energyMap.set("Telangana State", totalEnergy);

export default energyMap;
