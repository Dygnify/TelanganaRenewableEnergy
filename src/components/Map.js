import React, { useState } from "react";
import energyMap from "../utilities/energyInfo";
import MapSvg from "../utilities/svg/MapSvg";

const Map = ({ setDistrict, setEnergy, width}) => {
	const [selectedDistrict, setSelectedDistrict] = useState("");
	const updateInfo = (event, district) => {
		event.stopPropagation(); // prevent event bubbling
		setEnergy(energyMap.get(district));
		if (district === "Telangana State") {
			setDistrict(district);
		} else {
			setDistrict(district + " District");
		}
	};
	return (
		<div
			className={`${width} mx-auto h-full py-4 pb-8`}
			onClick={(e) => updateInfo(e, "Telangana State")}
		>
			<MapSvg
				selectedDistrict={selectedDistrict}
				setSelectedDistrict={setSelectedDistrict}
				updateInfo={updateInfo}
			/>
		</div>
	);
};

export default Map;
