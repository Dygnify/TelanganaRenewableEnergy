import React, { useState } from "react";
import MapSvg from "../../utilities/svg/MapSvg";

const MapChart = () => {
	const [selectedDistrict, setSelectedDistrict] = useState("");
	return (
		<div className="w-[90%] mx-auto h-full py-2">
			<div>
				<MapSvg
					selectedDistrict={selectedDistrict}
					setSelectedDistrict={setSelectedDistrict}
				/>
			</div>
		</div>
	);
};

export default MapChart;
