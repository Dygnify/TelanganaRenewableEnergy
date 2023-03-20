import React, { useState } from "react";
import energyMap from "../utilities/energyInfo";
import MapSvg from "../utilities/svg/MapSvg";

const Map = ({ setDistrict, setEnergy, width, title }) => {
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
			className={`${width} mx-auto h-full py-4 pb-8 relative`}
			onClick={(e) => {
				updateInfo(e, "Telangana State");
				setSelectedDistrict("");
			}}
		>
			<MapSvg
				selectedDistrict={selectedDistrict}
				setSelectedDistrict={setSelectedDistrict}
				updateInfo={updateInfo}
				title={title}
			/>
			{title && (
				<p className="absolute top-2 right-0  text-[#535A6C] font-bold text-[16px]">
					Districtwide Energy Production
				</p>
			)}
		</div>
	);
};

export default Map;
