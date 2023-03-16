import React, { useState } from "react";
import mapImg from "../images/map.png";
import { allCoordinators } from "../utilities/coordinates";
import { getTotalEnergy } from "../utilities/getTotalEnergy";

const Map = ({setDistrict, setEnergy }) => {
	const [coords, setCoords] = useState([]);

	const showCoord = (event) => {
		const xCoord = event.nativeEvent.offsetX;
		const yCoord = event.nativeEvent.offsetY;
		setCoords([...coords, xCoord, yCoord]);
		console.log(coords);
	};
	const updateInfo = (event, data, districtEnergy) => {
		event.stopPropagation(); // prevent event bubbling
		setDistrict(data);
		setEnergy(districtEnergy);
	}
	return (
		<div
			className="w-2/3 h-[500px] flex justify-center items-center rounded-md box-shadow4 bg-[#FDFCFF] border border-[#ccc2ff77] relative "
			// data-aos="zoom-in"
			// data-aos-anchor="#example-anchor"
			// data-aos-duration="1000"
			onClick={(e) => updateInfo(e, "Telangana State", getTotalEnergy())}
		>
			<img
				src={mapImg}
				alt=""
				useMap="#districtmap"
				className="max-w-full rounded-md mix-blend-multiply"
				onClick={(e) => showCoord(e)}
			/>
			<map name="districtmap">
				{allCoordinators.map((item, i) => (
					<area
						key={i}
						shape="poly"
						coords={item.coord}
						alt="map-demo"
						onClick={(e) =>
							updateInfo(
								e,
								item.district + " District",
								item.energy
							)
						}
					/>
				))}
			</map>
		</div>
	);
};

export default Map;
