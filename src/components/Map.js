import React, { useState } from "react";
import mapImg from "../images/map.png";
import { allCoordinators } from "../utilities/coordinates";

const Map = ({setDistrict }) => {
	const [coords, setCoords] = useState([]);

	const showCoord = (event) => {
		const xCoord = event.nativeEvent.offsetX;
		const yCoord = event.nativeEvent.offsetY;
		setCoords([...coords, xCoord, yCoord]);
		console.log(coords);
	};
	const updateDistrict = (event, data) => {
		event.stopPropagation(); // prevent event bubbling
		setDistrict(data);
	}
	return (
		<div
			className="w-2/3 h-[500px] flex justify-center items-center rounded-md box-shadow bg-[#f8f2ed59] relative"
			data-aos="zoom-in"
			data-aos-anchor="#example-anchor"
			data-aos-duration="1000"
			onClick={(e) => updateDistrict(e, "Telangana State")}
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
						onClick={(e) => updateDistrict(e, item.district+' District')}
					/>
				))}
			</map>
		</div>
	);
};

export default Map;
